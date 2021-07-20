
const Joi = require('joi');
const express = require('express');
const app=express();

app.use(express.json());
 
const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2' },
    {id:3,name:'course3'},
];


app.get('/',(req,res)=>{
    res.send('Hello World!!!');
});
app.get('/api/courses',(req,res)=>{
    res.send(courses);
});
//port
app.post('/api/courses',(req,res)=>{
    const { error } =validateCourse(req.body);
    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    } 


    const course={
        id: courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id',(req,res)=>{
    //lookup for the course if it exist
    //validate if invalid baad req
    //update course return updated course
    let course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) 
    {
        res.status(404).send('The course with given id not found');
        return;
    }
   // const result =validateCourse(req.body);
    const { error } =validateCourse(req.body);
    if(error){
        res.status(400).send(result.error.details[0].message);
        return;
    } 
    course.name=req.body.name;
    res.send(course);

});

function validateCourse(course){
    const schema={
        name:Joi.string().min(3).required()
    };

  return Joi.validate(course,schema);
    
}
app.delete('/api/courses/:id',(req,res)=>{
    //look up if exist

    //delete
    const course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) {
        res.status(404).send('The course with given id not found');
    return;
    }
    const index=courses.indexOf(course);
    courses.slice(index,1);
    res.send(course);
});




app.get('/api/courses/:id',(req,res)=>{
    let course = courses.find(c=>c.id===parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given id not found');
    res.send(course);
});
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on port ${port}...`));
