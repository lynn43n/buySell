import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import {fakeListings} from '../fake-data';

@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent implements OnInit {
  listing: Listing;

  constructor(
    private route : ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.listing= fakeListings.find(l => l.id === id);
  }

}
