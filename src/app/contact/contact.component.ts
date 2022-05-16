import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactDetails = [
    {
      field: "Address",
      value: "25 Kooringal Drive Jindalee QLD 4074, Australia"
    },
    {
      field: "Mobile number",
      value: "0493310371"
    },
    {
      field: "Email address",
      value: "val_enriquez2000@yahoo.com"
    }
  ]

  icons = [
    {
      alt: "github",
      path: "./assets/394187_github_icon.svg",
      url: "https://github.com/vienriquez"
    },
    {
      alt: "linkedin",
      path: "./assets/5282542_linkedin_network_social network_linkedin logo_icon.svg",
      url: "https://www.linkedin.com/in/val-ian-enriquez-a9634b36/"
    }
  ]

}
