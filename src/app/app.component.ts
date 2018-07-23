import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  output = 0;
  curInput = [];
  isOperatorApplied = false;
  operator = '';
  btnClicked(val) {
    if (this.operator != '') {
      if (this.curInput[1]) {
        this.curInput[1] = parseInt(this.curInput[1].toString() + val.toString());
      } else {
        this.curInput[1] = val;
      }
      this.output = this.curInput[1];
    } else {
      if (this.curInput[0]) {
        this.curInput[0] = parseInt(this.curInput[0].toString() + val.toString());
      } else {
        this.curInput = [val];
      }
      this.output = this.curInput[0];
    }
  }

  operatorClicked(val) {
    this.operator = val;
  }

  calculate() {
    switch(this.operator) {
      case 'MUL': 
        this.output = this.curInput[0] * this.curInput[1];
        this.resetCalc();
        break;
      case 'SUB':
        this.output = this.curInput[0] - this.curInput[1];
        this.resetCalc();
        break;
      case 'ADD': 
        this.output = this.curInput[0] + this.curInput[1];
        this.resetCalc();
        break;
      case 'DEV': 
        this.output = this.curInput[0] / this.curInput[1];
        this.resetCalc();
        break;
    }
  }
  resetCalc(reset = false) {
    this.operator = '';
    this.curInput = [];
    if (reset)
      this.output = 0;
  }
}
