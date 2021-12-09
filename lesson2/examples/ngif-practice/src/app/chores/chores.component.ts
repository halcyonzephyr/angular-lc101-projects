import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [];
   finishedChores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries', 'Empty chores list'];

   targetImage = 'https://d.newsweek.com/en/full/1548732/ai.jpg';

   constructor() { }

   ngOnInit() {
   }

}
