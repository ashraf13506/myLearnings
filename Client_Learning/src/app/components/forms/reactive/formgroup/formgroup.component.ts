import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.scss']
})


//formControlUsed to control the indiviual form fields
//formgoup will group the input values
//setValue will replace the entire values in form
//pathch value used to replace/update the property of the object
export class FormgroupComponent {
  colleges=["CAHCET","AMCET","GIT","VIT"]
  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(''),
      zipcode:new FormControl('')
    })
  })

  onSubmit()
  {
    console.log(this.profileForm.value)
  }

//creation of formgroup using formbuilder services

constructor(private formBuilder:FormBuilder){  }
educationalDetails=this.formBuilder.group({
  highQualification:new FormControl('',Validators.required),
  College:this.formBuilder.group({
    name:new FormControl(),


  })


})

educationForm(){
  console.log(this.educationalDetails.value)
}

}
