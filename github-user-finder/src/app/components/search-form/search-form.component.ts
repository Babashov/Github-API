import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
  	fetch(`https://api.github.com/users/${form.value.username}`)
  	.then(res=>res.json())
  	.then(data=>console.log(data))
  	.catch(err=>console.log(err));
  }

}
