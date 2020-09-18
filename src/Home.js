import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faPen } from '@fortawesome/free-solid-svg-icons';



import Header from './Header';
import Skills from './Skills';
import Footer from './Footer';

import Fade from 'react-reveal/Fade';

import './Home.css';

import { labSkills, workSkills, etcSkills, selfStudySkills } from './skillsList.js';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSimple: true,
        };
    }

    changeDisplay(){
        this.setState({isSimple: !this.state.isSimple});
    }

    render(){
        return(
            <div id="home" className="Home">
              <Header/>
              <div>
                <div className="container">
                  <section id="about" className="topic-group back-about">
                    <h1 className="topic-header"><span className="icon"><FontAwesomeIcon icon={faUser}/></span>About Me</h1>
                    <div className="topic-contents">
                      はじめまして、日高です。現在金融系のSIに勤めている社会人2年目の27才(93年7月生まれ)です。
                      大学・大学院と情報系の学科を専攻していて、研究室ではC++等を使って画像処理系の研究を行っていました。
                      <br/><br/>
                      入社後はマネジメント業務に携わっていますが、もっと技術に触れた仕事をしたいと感じるようになり、現在は主にweb系技術を独学しています。
                    </div>
                  </section>

                  <section id="skills" className="topic-group back-skills">
                    <h1 className="topic-header"><span className="icon"><FontAwesomeIcon icon={faStar}/></span>Skills</h1>
                    <div className="switch">
                      <span>リスト表示：</span>
                      <label className="switch__label">
                        <input type="checkbox" className="switch__input" onChange={() => {this.changeDisplay()}} value={this.state.isSimple} checked={this.state.isSimple}/>
                        <span className="switch__content"></span>
                        <span className="switch__circle"></span>
                      </label>
                    </div>


                    <Fade>
                      <div className="topic-contents">
                        <h4 className="contents-header">研究室(2年)</h4>
                        <Skills skills={labSkills}
                                color="aqua"
                                isSimple={this.state.isSimple}
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <div className="topic-contents">
                        <h4 className="contents-header">実務経験(1年)</h4>
                        <Skills skills={workSkills}
                                color="lime"
                                isSimple={this.state.isSimple}
                        />

                      </div>
                    </Fade>
                    <Fade>
                      <div className="topic-contents">
                        <h4 className="contents-header">独学</h4>
                        <Skills skills={selfStudySkills}
                                color="orange"
                                isSimple={this.state.isSimple}
                        />
                      </div>
                    </Fade>
                    <Fade>
                      <div className="topic-contents">
                        <h4 className="contents-header">その他</h4>
                        <Skills skills={etcSkills}
                                color="white"
                                isSimple={this.state.isSimple}
                        />
                      </div>
                    </Fade>
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
                            <a className="work-link"href="https://github.com/s3033119/portfolio" target="_blank" rel="noopener noreferrer">→ GitHub</a>
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
