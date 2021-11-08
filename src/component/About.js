import React from 'react'
import Card from './Card'
import BorderGreen from './Border'
import html from '../images/html.png';
import php from '../images/php.png';
import js from '../images/js.png';
import python from '../images/python.png';
import './About.css';

class About extends React.Component {
  render(){
    return(
      <div  className="wrapper">
        <BorderGreen />
        <div className="about__main">
          <h1 className="about__title">Go Itatayama</h1>
          <div className="about__container">
            <div className="about__container__head">Career</div>
            <div className="about__container__description">
              <table>
                <tr>
                  <td>Name</td>
                  <th>板山 豪</th>
                </tr>
                <tr>
                  <td>Birthday</td>
                  <th>　1991/06/14</th>
                </tr>
              </table>
              <div className="about__container__lists">
                <li className="about__container__list">2015/01　　　　QA業界でのキャリアスタート</li>
                <li className="about__container__list">2018/12　　　　LINE Fukuoka株式会社にQAエンジニアとして入社</li>
                <li className="about__container__list">2019/06~現在　テスト自動化エンジニアとして活動中</li>
              </div>
            </div>
          </div>
          <div className="about__container">
            <div className="about__container__head skill">Skill</div>
            <div className="cards">
              <Card img={js} title="Javascript" lead="E2Eテスト自動化の実装に使用"/>
              <Card img={python} title="python" lead="E2Eテスト自動化の実装や、LINEのメッセージAPI実行の自動化に使用。"/>
              <Card img={html} title="HTML/CSS" lead="内製の仕様管理ツール作成に使用。（フロントエンド）"/>
              <Card img={php} title="PHP" lead="内製の仕様管理ツール作成に使用。（バックエンド）"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;
