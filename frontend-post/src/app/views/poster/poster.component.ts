import { Component } from '@angular/core';
import { Poster } from 'src/app/model/poster';
import { PosterService } from 'src/app/service/poster.service';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Score } from 'src/app/model/score';
import { delay } from 'src/app/utils/delay';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
})
export class PosterComponent {

  id?: number | null
  indexEdit: number = -1

  title = 'Poster Show';
  loading = true;
  poster?: Poster;
  posts: Post[] = [];
  score: Score = {
    posterId: 0,
    count: 0,
    total: 0,
  };
  feedback: string = "";
  calScore: number = 0;

  formAdd: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    post: new FormControl("", [Validators.required, Validators.minLength(10)]),
    score: new FormControl("", [Validators.required])
  });

  form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    post: new FormControl("", [Validators.required, Validators.minLength(10)])
  });
  submitted = false;

  constructor(
    private posterService: PosterService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))

    this.loading = true;
    this.posterService.getOne(this.id).subscribe((poster: Poster) => {
      this.poster = poster;
      this.loading = false;
    }, async (error: Error) => {
      this.feedback = `ไม่สามารถแสดง Poster id:${this.id}`;
      await delay(2000)
      this.router.navigate([`/`]);
    });

    this.postService.getAll(this.id).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.loading = false;
    });

    this.postService.score(this.id).subscribe((score: Score) => {
      this.score = score;
      this.loading = false;
    });
  }

  get fEdit(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get fAdd(): { [key: string]: AbstractControl } {
    return this.formAdd.controls;
  }

  handleEdit(id: number | null, index: number) {
    if (typeof this.posts === 'object' && this.posts.length > 0) {
      if (this.indexEdit !== -1) {
        this.posts[this.indexEdit].edit = false
      }
      this.indexEdit = index
      this.posts[index].edit = true
      this.form.patchValue({
        name: this.posts[index].name,
        post: this.posts[index].post
      });
    }
  }

  handleSubmitCreate() {
    if (this.formAdd.invalid) {
      return;
    }
    const id: number = Number(this.id)
    this.postService.create(id, this.formAdd.value).subscribe(async (post: Post) => {
      this.formAdd.reset();
      this.posts?.push(post)
      this.feedback = `เพิ่ม post สำเร็จ`;
      await delay(3000)
      this.feedback = ``;
    });
  }

  handleSubmitUpdate(index: number) {
    if (this.form.invalid) {
      return;
    }
    if (typeof this.posts === 'object' && this.posts.length > 0) {
      this.indexEdit = -1
      this.posts[index].edit = false
      if (typeof this.posts[index].id === 'number') {
        const id: number = Number(this.posts[index].id)
        this.postService.update(id, this.form.value).subscribe((post: Post) => {
          this.posts[index] = post
        });
      }
    }
  }

  reset() {
    this.formAdd.reset();
  }

  delete(id: number | null, index: number) {
    if (typeof this.posts === 'object' && this.posts.length > 0) {
      if (typeof this.posts[index].id === 'number') {
        const id: number = Number(this.posts[index].id)
        this.postService.delete(id).subscribe(async (post: Post) => {
          this.posts?.splice(index, 1)
          this.feedback = `ลบ post id:${id} สำเร็จ`;
          await delay(3000)
          this.feedback = ``;
        });
      }
    }
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = './assets/images/image-error.png'
  }

  calculatorScore(totalScore: number, countPost: number): number {
    if (countPost <= 0) {
      return 0
    } else {
      const score = Number((totalScore / countPost).toFixed(1))
      if (score > 10) {
        return 10
      } else if (score < 0) {
        return 0
      } else {
        return score
      }
    }
  }
}
