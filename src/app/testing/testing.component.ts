import { Component, OnInit } from '@angular/core';


class joke{
  setup : string;
  punchline: string;
  hide: boolean;

  constructor(setup: string, punchline: string){
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }
  toggle(){
    this.hide = !this.hide;
  }
}

let jokes = new joke('hollo first','hello second');

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  jokes: object[];
  constructor() { 
    this.jokes = [ 
      new joke('first ' ,'hi 1th 1.1'),
      new joke('second' ,'hi 2th 1.2'),
      new joke('third ' ,'hi 3th 1.3'),
      new joke('fourth' ,'hi 4th 1.4')
    ]
  }

  ngOnInit() {
  }
  toggle(joke){
    joke.hide = !joke.hide;
  }
}
