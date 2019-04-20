import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITaskList } from '../shared/models/models';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.scss']
})
export class TaskListsComponent implements OnInit {

  public taskLists: ITaskList[] = [];

  constructor(
    private provider: ProviderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    })
  }

  navigateBack() {
    this.location.back()
  }

}
