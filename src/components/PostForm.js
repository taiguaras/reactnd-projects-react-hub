import React, {Fragment} from "react";
import {Field, reduxForm} from "redux-form";
import {Form, Container} from "semantic-ui-react";
import Layout from './Layout';

const renderTextArea = field => (<Form.TextArea
  {...field.input}
  label={field.label}
  placeholder={field.placeholder}/>);

const PostForm = props => {

    const {handleSubmit, reset} = props;
  
    return (
          <Form onSubmit={handleSubmit}>
              <Form.Group grouped>

                  <Field
                  component={Form.Input}
                  label="Author"
                  name="author"
                  placeholder="Your name"/>
  
                  <Field
                  component={Form.Input}
                  label="Post Title"
                  name="title"
                  placeholder="First name"/>
  
                  <Field
                  component={Form.Input}
                  label="Category"
                  name="category"
                  placeholder="Redux, react.."/>

                  <Field
                  component={renderTextArea}
                  label="Post content"
                  name="body"
                  placeholder="Enter post content here"/>

                  <Field
                  component={Form.Input}
                  label="Img URL"
                  name="imgUrl"
                  placeholder="Valid img link "/>               
              </Form.Group>
  
              <Form.Group inline>
                <Form.Button primary>Submit</Form.Button>
                <Form.Button onClick={reset}>Reset</Form.Button>
              </Form.Group>
            </Form>
    );
  };
  
  export default reduxForm({form: "postCtrl"})(PostForm);
  