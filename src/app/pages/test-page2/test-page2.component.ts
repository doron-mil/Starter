import {Component, OnInit} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-test-page2',
  templateUrl: './test-page2.component.html',
  styleUrls: ['./test-page2.component.css']
})
export class TestPage2Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getUsersFromServer() {
    axios.get('http://localhost:8081/users')
      .then(function (response) {
        console.log('***************', response);
      })
      .catch(function (error) {
        console.error('***************', error);
      });
  }
}
