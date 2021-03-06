import React from 'react';

import ReactTooltip from 'react-tooltip';

import Stars from './Stars';

import './Skills.css';

export default class Home extends React.Component {

    render(){
        return(
            <div className="skill-group">
              {/* シンプル表示 */}
              { this.props.isSimple && (
                  <table className="simple-table">
                    <tr className="simple-skill-list">
                      <th className="simple-skill-name">スキル名</th>
                      <th className="simple-skill-description">詳細</th>
                    </tr>
                    {this.props.skills.map((skill)=> {
                        return(
                            <tr className="simple-skill-list">
                              <td className="simple-skill-name">{skill.name}<br/><Stars rate={skill.rate}/></td>
                              <td className="simple-skill-description">{skill.description}</td>
                            </tr>
                        );
                    })}
                  </table>
              )}

              {/* サムネイル表示 */}
              { !this.props.isSimple && (
                  <>
                    {this.props.skills.map((skill)=> {
                        return(

                            <div className="skill-content"
                                 style={{
                                     'boxShadow': '1px 0 5px 1px ' + this.props.color,
                                 }}>

                              <div className="skill-icon" data-tip={skill.description}>
                                <img src={require("./icons/"+skill.image)}/>
                                <ReactTooltip className="react-tooltip" effect="solid" type="light" place="bottom" backgroundColor="rgba(0,0,0,.7)" textColor="white"/>

                              </div>
                              <span className="skill-name">{skill.name}</span>
                              <Stars rate={skill.rate}/>
                            </div>

                        );
                    })}
                  </>
              )}
            </div>
        );
    }
}
