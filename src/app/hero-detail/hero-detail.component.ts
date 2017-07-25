import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Hero } from './../shared/hero';
import { HeroService } from './../shared/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {

  constructor (
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ){}

  @Input() hero: Hero;

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void  {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
    .then(()=>this.goBack());
  }
}
