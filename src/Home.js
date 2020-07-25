import React from 'react';
import ReactTooltip from 'react-tooltip';

import { Tab,Tabs } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Header from './Header';
import Stars from './Stars';

import './Home.css';
import './Header.css';
import { labSkills, workSkills, etcSkills, selfStudySkills } from './skills.js';

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

                  <div className="topic-group">
                    <h1 className="topic-header">スキルセット</h1>
                    <div className="topic-contents">
                      <h4 className="contents-header">研究室(2年)</h4>
                      <h5>大学院時代に研究（画像処理系）で使用していた言語・ライブラリです。</h5>
                      <div className="skill-group">
                        {labSkills.map((labSkill)=> {
                            return(
                                <div className="skill-content sha-aqua" data-tip={labSkill.description}>
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="bottom"/>
                                  <div className="skill-icon">
                                    <img src={require("./icons/"+labSkill.image)}/>
                                  </div>
                                  <span className="skill-name">{labSkill.name}</span>
                                  <Stars className="star-rate"
                                         rate={labSkill.rate}></Stars>
                                </div>
                            );
                        })}
                      </div>
                    </div>


                    <div className="topic-contents">
                      <h4 className="contents-header">実務経験(1年)</h4>
                      <h5>現在、会社(実務)で使用している言語・フレームワークです。</h5>

                      <div className="skill-group">
                        {workSkills.map((workSkill)=> {
                            return(
                                <div className="skill-content sha-orange" data-tip={workSkill.description}>
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="bottom"/>
                                  <div className="skill-icon">
                                    <img src={require("./icons/"+workSkill.image)}/>
                                  </div>
                                  <span className="skill-name">{workSkill.name}</span>
                                  <Stars className="star-rate"
                                         rate={workSkill.rate}></Stars>
                                </div>
                            );
                        })}
                      </div>
                    </div>


                    <div className="topic-contents">
                      <h4 className="contents-header">独学</h4>
                      <h5>独学である程度取得してる言語・フレームワークです。</h5>

                      <div className="skill-group">
                        {selfStudySkills.map((selfStudySkill)=> {
                            return(
                                <div className="skill-content sha-lime" data-tip={selfStudySkill.description}>
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="bottom"/>
                                  <div className="skill-icon">
                                    <img src={require("./icons/"+selfStudySkill.image)}/>
                                  </div>
                                  <span className="skill-name">{selfStudySkill.name}</span>
                                  <Stars className="star-rate"
                                         rate={selfStudySkill.rate}></Stars>
                                </div>
                            );
                        })}
                      </div>
                    </div>


                    <div className="topic-contents">
                      <h4 className="contents-header">その他</h4>

                      <div className="skill-group">
                        {etcSkills.map((etcSkill)=> {
                            return(
                                <div className="skill-content sha-white" data-tip={etcSkill.description}>
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="bottom"/>
                                  <div className="skill-icon">
                                    <img src={require("./icons/"+etcSkill.image)}/>
                                  </div>
                                  <span className="skill-name">{etcSkill.name}</span>
                                  <Stars className="star-rate"
                                         rate={etcSkill.rate}></Stars>
                                </div>
                            );
                        })}
                      </div>
                    </div>

                  </div>

                </section>
              </div>
            </div>
        );
    }
}
