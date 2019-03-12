import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react'

class Detail extends Component {
    render() {
        const { post } = this.props;
        console.log(post);
        return (

            <Layout>
                <div className="categories-page">
                    <div className="intro-content"> 
                        <h2>Welcome to React Hub!!</h2>             
                    </div>
                    <Button>Rating</Button>  
                    <Button>Date</Button>     
                    Detail page
                    {this.props.match.params.id}                                      
                </div>    
            </Layout>     

        );
    }


}

export default Detail;