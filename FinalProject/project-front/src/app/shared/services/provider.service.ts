import {EventEmitter, Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import { ICategoryList, IAuthResponse, ICategoryImage,ISection,ITrainerComment,ITrainers, IComment } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<string>();

  constructor(http: HttpClient) {
    super(http);
  }

  getCategoryLists(): Promise<ICategoryList[]> {
    return this.get('http://localhost:8000/app/categories/', {});
  }

  getCategoryListDetail(id: number): Promise<ICategoryList> {
    return this.get(`http://localhost:8000/app/categories/${id}/`, {});
  }

  getCategoryImages(id:number): Promise<ICategoryImage>{
    return this.get(`http://localhost:8000/app/categories/${id}/images/`, {});

  }
  getCategorySections(id:number): Promise<ISection[]>{
    return this.get(`http://localhost:8000/app/categories/${id}/sections/`, {});

  }
  getSectionDetail(id:number): Promise<ISection>{
    return this.get(`http://localhost:8000/app/sections/${id}/`, {});

  }
  getSectionTrainers(id:number): Promise<ITrainers[]>{
    return this.get(`http://localhost:8000/app/sections/${id}/trainers/`, {});

  }
  getTrainerDetail(id:number): Promise<ISection>{
    return this.get(`http://localhost:8000/app/trainers/${id}/`, {});

  }
  getSectionComments(id:number): Promise<IComment[]>{
    return this.get(`http://localhost:8000/app/sections/${id}/comments/`, {});

  }
  getTrainerComments(id:number): Promise<ITrainerComment[]>{
    return this.get(`http://localhost:8000/app/trainers/${id}/comments/`, {});

  }
  
  createComment(id:number,content: any): Promise<IComment> {
    return this.post(`http://localhost:8000/app/sections/${id}/comments/`, {
      
      content:content
    });
  }

}