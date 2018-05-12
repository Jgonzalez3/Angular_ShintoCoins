import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  title = "Mine ShintoCoins"
  constructor(private _httpService: HttpService) { }
  questions = [{"question": "What is 5 * 5", "answer": 25}, {"question": "What is 32 - 26", "answer": 6}, {"question": "What is 3^3", "answer": 27}, {"question": "What is 56/7", "answer": 8}, {"question": "What is 2^5", "answer": 32}, {"question": "What is 83-26", "answer": 57}]
  algo: any;
  shinto: any;
  answer: number;
  ngOnInit() {
    this.getShinto();
    this.Algo();
  }
  getShinto(){
    this.shinto = this._httpService.shareShinto();
    console.log(this.shinto)
  }
  Algo(){
    var rand = Math.floor(Math.random() *(this.questions.length));
    console.log(rand);
    this.algo = this.questions[rand];
    console.log(this.algo);
  }
  Answer(){
    console.log(this.algo);
    if(this.answer == this.algo["answer"]){
      var action = "Mined";
      var reward = 1;
      this.updateShinto(this.shinto.shintoValue, action, reward)
      this.Algo();
      this.answer = null;
      this.getShinto()
    }
  }
  updateShinto(shintoVal, action, mine){
    console.log("UPDATE", shintoVal);
    this._httpService.updateShinto(shintoVal, action, mine);
  }
}
