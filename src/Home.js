import React from 'react';

import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


import Header from './Header';
import Stars from './Stars';
import Footer from './Footer';

import './Home.css';

import { labSkills, workSkills, etcSkills, selfStudySkills } from './skills.js';

export default class Home extends React.Component {
    render(){
        return(
            <div className="Home">
              <Header/>
              <div>
                <div className="container">
                  <section id="about" className="topic-group back-about">
                    <h1 className="topic-header"><span className="icon"><FontAwesomeIcon icon={faUser}/></span>About Me</h1>
                    <div className="topic-contents">
                      はじめまして、日高です。現在金融系のSIに勤めている社会人2年目の27才(93年7月生まれ)です。
                      大学・大学院と情報系の学科を専攻していて、研究室では主にC++を使って画像処理系の研究を行っていました。
                      <br/><br/>
                      入社後はSIのような管理職よりも、研究室のようにもっと柔軟な思考で技術に触れる方が自分に合っているのではないかと感じました。エンジニア特有の独特な空気感・コミュニティも好きです。
                    </div>
                  </section>

                  <section id="skills" className="topic-group back-skills">
                    <h1 className="topic-header"><span className="icon"><FontAwesomeIcon icon={faStar}/></span>Skills</h1>
                    <div className="topic-contents">
                      <h4 className="contents-header">研究室(2年)</h4>
                      <h5>大学院時代に研究（画像処理系）で使用していた言語・ライブラリです。</h5>
                      <div className="skill-group">
                        {labSkills.map((labSkill)=> {
                            return(
                                <div className="skill-content sha-aqua" data-tip={labSkill.description}>
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="right"/>
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
                      <h5>現在、会社(実務)で使用している言語・フレームワーク等です。</h5>

                      <div className="skill-group">
                        {workSkills.map((workSkill)=> {
                            return(
                                <div className="skill-content sha-orange" data-tip={workSkill.description}>
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="right"/>
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
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="right"/>
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
                                  <ReactTooltip effect="solid" type="light" textColor="black" place="right"/>
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
                  </section>

                  <section id="work" className="topic-group back-work">
                    <h1 className="topic-header"><span className="icon"><FontAwesomeIcon icon={faPen}/></span>Work</h1>
                    <div className="topic-contents">
                      作成した成果物です。
                      <div className="work-group">
                        <div className="work-card">
                          <div className="work-image">
                            <img src={require("./images/portfolio.png")}/>
                          </div>
                          <div className="work-body">
                            <h3 className="work-title">ポートフォリオ</h3>
                            <p className="work-text">ポートフォリオ（このページ）です。</p>
                            <a className="work-link"href="https://github.com/s3033119/portfolio" target="_blank" rel="noopener">→ GitHub</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <Footer/>
            </div>

        );
    }
}
