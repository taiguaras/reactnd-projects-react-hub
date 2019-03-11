import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react'

class Categories extends Component {
    render() {
        return (

            <Layout>
                <div className="categories-page">
                    <div className="intro-content"> 
                        <h2>Welcome to React Hub!!</h2>             
                    </div>
                    <Button>Rating</Button>  
                    <Button>Date</Button>     
                    Categories                   
                </div>    
            </Layout>     

        );
    }


}

export default Categories;