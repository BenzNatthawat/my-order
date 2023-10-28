import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Poster } from 'src/app/model/poster';
import { PosterService } from 'src/app/service/poster.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent {
  title = 'frontend-post';
  posters?: Poster[];
  loading = true;
  feedback: any = {};

  constructor(
    private posterService: PosterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.posterService.getAll().subscribe((posters: Poster[]) => {
      this.posters = posters;
      this.loading = false;
    });
  }

  route(id: number | null): void {
    this.router.navigate([`/poster/${id}`]);
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = './assets/images/image-error.png'
  }
}
