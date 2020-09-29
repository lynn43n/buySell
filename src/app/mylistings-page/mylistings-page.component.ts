import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Listing} from '../types';
import {fakeMyListings} from '../fake-data';

@Component({
  selector: 'app-mylistings-page',
  templateUrl: './mylistings-page.component.html',
  styleUrls: ['./mylistings-page.component.css']
})
export class MylistingsPageComponent implements OnInit {
  email: string = '';
  listings:  Listing[]=[];

  constructor(
    
  ) { }

  ngOnInit(): void {
    this.listings= fakeMyListings;

  }

  OnDeleteClicked(listingId: string): void{
    alert(`Deleting your listing with id ${listingId}`)

  }

}
