import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import Default from '../../layouts/Default'
import s from './styles.css'
// import sglobal from '../../index.global.css'

//fragm & components
// import Button from '../../components/Button'
// import OverviewMenu from '../../fragments/OverviewMenu'
// import Header from '../../fragments/Header'
// import Logo from '../../fragments/Logo'
// import SubMenu from '../../fragments/SubMenu'
// import Btn from '../../fragments/Btn'

//images
// import ServerlessMovementImage from '../../assets/theserverlessmovement.png'
// import WhatmakesAnApplication from '../../assets/whatmakesanapplication.png'
// import ZeroAdministration from '../../assets/zeroAdministration.svg'
// import AutoScaling from '../../assets/AutoScaling.svg'
// import PayPerUse from '../../assets/payperuse.svg'
// import IncreasedVelocity from '../../assets/increasedvelocity.svg'
// import IncreaseDevSpeed from '../../assets/increaseddevspeed.svg'
// import vendorlockin from  '../../assets/avoidvendor.svg'
// import Infrastructure from '../../assets/infrastructure.svg'
// import Ecosystem from '../../assets/ecosystem.svg'

class LearnPage extends React.Component {
  render() {

    var colRight = classnames(s.col, s.right);
    var colLeft = classnames(s.col, s.left);

    return (
      <Default>
          <div className={s.mainWrapper}>
            <h1>Learn section</h1>
            {/* <Header /> */}
            {/* <div className="outerWrapper">
              <div className={s.mainImage}>
                <SubMenu horizPos={true}/>
                <div className={s.mainImageInnerwrapper}>
                    <div>
                        <h1>Why Serverless?</h1>
                        <div>
                          <p>Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere.</p>

                          <p>What ‘serverless’ really means is that, as a developer you don’t have to think about those servers. You just focus on code.</p>
                        </div>
                    </div>
                    <div>
                    <SubMenu horizPos={false}/>
                    </div>
                </div>
              </div>

              <section className={s.theserverlessmovement}>
                <div className={s.innerWrapper}>
                    <div className={colLeft}>
                        <h2>The Serverless Movement</h2>
                        <p>Serverless has become a movement about developer empowerment. As a technology, it abstracts away the most menial parts of building an application, leaving you free to actually spend your days coding.</p>

                        <p>What this means is that you, the developer, can rapidly build apps that handle production-ready traffic. You don’t have to actively manage scaling for your applications. You don't have to provision servers, or pay for resources that go unused.</p>
                        <p>The technology is still early, but thousands of developers are already proving that serverless can enable them to launch applications at record speed and cost.</p>
                    </div>
                    <div className={colRight}>
                      <img src={ServerlessMovementImage} alt="The Serverless Movement" />
                    </div>
                </div>
              </section>
              <section className={s.whatMakesServerless}>
                  <div className={s.innerWrapper}>
                    <div className={colLeft}>
                      <img src={WhatmakesAnApplication} alt="What makes an application serverless?" />
                    </div>
                    <div className={colRight}>
                      <h2>What makes an application serverless?</h2>
                      <p>The serverless movement started with the release of AWS Lambda, a Function-as-a-Service (FaaS) compute service. But serverless is much more than just FaaS.</p>
                      <p>Ultimately, serverless is about focusing your efforts on what provides value to your users. This means using managed services for databases, search indexes, queues, SMS messaging, and email delivery. It means tying these services together using stateless, ephemeral compute like the various FaaS offerings.</p>
                      <p>Upgrading your Linux distro does not provide value to your users. Managing your RabbitMQ servers does not provide value to your users. Shipping product provides value to your users.</p>
                    </div>
                  </div>
              </section>
              <section className={s.getStarted}>
                  <div className={s.innerWrapper}>
                    <p>focus on your business logic, not your servers.</p>
                    <Btn to={'#'} btnClassType={'white'} text={'get started'}/>
                  </div>
              </section>
              <section className={s.benefits}>
                  <h3>Benefits of Serverless Applications</h3>
                  <p>These are the 4 core benefits of Serverless Applications you should know about</p>
                  <div className={s.innerWrapper}>
                      <div className={s.col}>
                        <img src={ZeroAdministration} alt="Zero administration"/>
                        <h4>Zero administration</h4>
                        <p>Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.</p>
                      </div>
                      <div className={s.col}>
                        <img src={AutoScaling} alt="Auto-scaling"/>
                        <h4>Auto-scaling</h4>
                        <p>Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend lulls the same way -- with peace of mind.</p>
                      </div>
                      <div className={s.col}>
                        <img src={PayPerUse} alt="Pay per use"/>
                        <h4>Pay-per-use</h4>
                        <p>Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don’t use.</p>
                      </div>
                      <div className={s.col}>
                        <img src={IncreasedVelocity} alt="Increased velocity"/>
                        <h4>Increased velocity</h4>
                        <p>Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.</p>
                      </div>
                  </div>
              </section>
              <div className={s.glitch}></div>
              <section className={s.theserverlessFramework}>
                <div className={s.innerWrapper}>
                    <div className={colLeft}>
                      <h2>The Serverless <br/>Framework</h2>
                      <p>If the Serverless Application is the new and improved application house on the block, then the Serverless Framework is the door you use to enter that house.</p>
                      <p>Serverless Applications are the next step in cloud-native development, and they require automation. If you're tying together multiple managed services and functions, you cannot rely on a checklist of manual steps. You should be able to recreate your entire application with a command.</p>
                      <p>That is where the Serverless Framework comes in. Use the Serverless Framework CLI to build and deploy your application to any and every cloud provider with a consistent experience. The Framework automatically configures cloud vendor settings for you, based on the language you use and the cloud provider you deploy to.</p>
                      <p>Keeping a maniacal focus on business value applies to your development tooling as well. Kids, don't roll your own deployment tools.</p>
                    </div>
                    <div className={colRight}>
                      <img src={ServerlessMovementImage} alt="The Serverless Framework" />
                    </div>
                </div>
              </section>
              <section className={s.benefitsOfServFramework}>
                  <h3>Benefits of Serverless Applications</h3>
                  <p>These are the 4 core benefits of Serverless Applications you should know about</p>
                  <div className={s.innerWrapper}>
                      <div className={s.col}>
                        <img src={IncreaseDevSpeed} alt="Increase development speed"/>
                        <h4>Increase development speed</h4>
                        <p>The Serverless Framework CLI enables developers to build, test, and deploy all in the same environment. Developers write their functions in cloud-agnostic Serverless YAML, and services can be deployed with a single command. Transactionally deploy code to multiple providers, version your deployments, and roll back the deployment if necessary.</p>
                      </div>
                      <div className={s.col}>
                        <img src={vendorlockin} alt="Avoid vendor lock-in"/>
                        <h4>Avoid vendor lock-in</h4>
                        <p>Different cloud providers all have different required formats and deployment methods. The Framework assembles your application into a single package that can be deployed across any cloud provider, abstracting away any necessary tweaking.</p>
                      </div>
                      <div className={s.col}>
                        <img src={Infrastructure} alt="Infrastructure as Code"/>
                        <h4>Infrastructure as Code</h4>
                        <p>Configure infrastructure across multiple clouds. Serverless cleanly integrates with every Serverless Compute Service so that you can formalize and standardize your entire infrastructure as code.</p>
                      </div>
                      <div className={s.col}>
                        <img src={Ecosystem} alt="Existing ecosystem"/>
                        <h4>Existing ecosystem</h4>
                        <p>The Serverless Framework is pluggable, and many dozens of community-contributed plugins exist in our GitHub Plugins repo. The Serverless Framework is widely adopted, meaning there are always active discussions on forums and there are a wide array of tutorials that will help you get started.</p>
                      </div>
                  </div>
              </section>
              <section className={s.nextStep}>
                <div className={s.innerWrapper}>
                    <div className={colLeft}>
                      <h2>Next steps</h2>
                      <p>Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</p>
                      <p>Or if you’re ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</p>
                    </div>
                    <div className={colRight}>
                      <SubMenu horizPos={false} appliedClass={'red'}/>
                    </div>
                </div>
              </section>
            </div> */}
            {/*  make a conponent */}
            {/* <footer>
              <div className={s.innerWrapper}>
                <Logo />
                <div className="footerWrapper">
                    <div>
                      <nav>
                        <div>
                          <p className="menuTitle">developers</p>
                          <ul>
                            <li><Link to='#'>docs</Link></li>
                            <li><Link to="#">quick starts</Link></li>
                            <li><Link to="#">examples & guides</Link></li>
                          </ul>
                        </div>
                       <div>
                          <p className="menuTitle">developers</p>
                          <ul>
                            <li><Link to='#'>docs</Link></li>
                            <li><Link to="#">quick starts</Link></li>
                            <li><Link to="#">examples & guides</Link></li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                    <div></div>
                </div>
              </div>
            </footer> */}
         </div>
       </Default>
    );
  }
}
export default LearnPage;
