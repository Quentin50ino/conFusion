import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from "../shared/comment";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  //@Input() dish: Dish; //è la variabile che viene passata all'elemento <app-dishdetail> all'interno del menu.component
  //per indicare che viene presa dall'esterno si utilizza il decorator @Input
  dish: Dish;
  dishIds : string[];
  prev: string;
  next: string;
  commentForm: FormGroup;
  comment: Comment;
  errMess : string;
  dishCopy: Dish;
  @ViewChild('cform') feedbackFormDirective;
  formErrors = {
    'author' : '',
    'rating' : '',
    'comment' : ''
   }
   validationMessages = {
    'author': {
      'required':      'Author name is required.',
      'minlength':     'Author name must be at least 2 characters long.'
    },
    'comment': {
      'required':      'Comment is required.'
    },
  };

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject ('BaseURL') private BaseURL) { 
      this.createForm()
    }

  ngOnInit() {
    this.dishService.getDishIds()
    .subscribe((dishIds) => this.dishIds = dishIds, errMess => this.errMess = <any>errMess ); 
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe((dish) => {this.dish = dish; this.dishCopy = dish; this.setPrevNext(dish.id); }, errMess => this.errMess = <any>errMess);
    //console.log(id);
    //this.dish = this.dishService.getDish(id);
    //this.dishService.getDish(id).subscribe((dish) => this.dish = dish);
  }

  setPrevNext(dishId: string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      rating: [5, [Validators.required]],
      comment: ['', [Validators.required]]
    })

    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));
  
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if(!this.commentForm) { return; }
    const form = this.commentForm;
    for(const field in this.formErrors) {
      if(this.formErrors.hasOwnProperty(field)) {
        //clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid) {
          const messages =  this.validationMessages[field];
          for(const key in control.errors) {
            if(control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dishCopy.comments.push(this.comment);
    this.dishService.putDish(this.dishCopy)
    .subscribe(dish => {
      this.dish = dish; this.dishCopy = dish;
    }, errMess => {this.dish = null; this.dishCopy = null; this.errMess = <any>errMess})
    this.commentForm.reset({
      author : '',
      rating : 5,
      comment : ''
    });
    //this.feedbackFormDirective.resetForm();
  }


}
