import React from 'react';
import { Tab,Tabs } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Header from './Header';

import './Home.css';
import './Header.css';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">
              <Header/>
              <div>
                <navbar className="nav nav-bar">

                </navbar>

                <section className="container">

                  <div className="topic-group">
                    <h1 className="topic-header">自己紹介</h1>
                    <div className="topic-contents">
                      <h4 className="contents-header">2013/4-2017/3 岐阜大学 工学部 電気電子・情報工学科</h4>
                      <h5>研究</h5>

                    </div>

                    {/* <Tabs defaultActiveKey="background-edu"> */}
                    {/*   <Tab eventKey="background-edu" title="学歴"> */}
                    {/*     <div> */}
                    {/*       <h5></h5> */}
                    {/*     </div> */}
                    {/*   </Tab> */}
                    {/*   <Tab eventKey="background-work" title="職歴"> */}

                    {/*   </Tab> */}
                    {/* </Tabs> */}

                  </div>
                </section>
              </div>
            </div>
        );
    }
}
