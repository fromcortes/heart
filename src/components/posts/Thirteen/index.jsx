import React, { Component } from 'react';

import Header from '../../Header';
import Footer from '../../Footer';

import Blockquote from '../../type-elements/Blockquote';
import DropCap from '../../type-elements/DropCap';
import GalleryThree from '../../post-elements/GalleryThree';
import H from '../../type-elements/H';
import Image from '../../type-elements/Image';
import L from '../../type-elements/L';
import LineBreak from '../../type-elements/LineBreak';
import P from '../../type-elements/P';
import PostEnd from '../../post-elements/PostEnd';
import Social from '../../type-elements/Social';

class Sixteen extends Component {
  render() {

    const imgThirteen       = require('../../../img/roc-volume-13-cover.png');
    const imgBlogSneakPeek  = require('../../../img/postImgs/native-blog-post-sneak-peek.png');

    return (
      <div className="cf w-100">
        <Header />
        <Social
          twitterLink="https://twitter.com/home?status=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2%20via%20%40fromcortes"
          facebookLink="https://www.facebook.com/sharer/sharer.php?u=https%3A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%23.2iqcydlb2"
          googleLink="https://plus.google.com/share?url=https%3A//www.facebook.com/sharer/sharer.php?u=https%253A//medium.com/the-rate-of-change/the-key-to-growing-your-social-media-presence-89daec5043ab%2523.2iqcydlb2" />
        <div id="13" className="bg-white br3 ph5-l pv4-l ph4 pv3 shadow-custom">

          <Image imgSrc={imgThirteen} imgAlt="People are More Than Connections" />
          <div className="mb5 tc">
            <H size={1}>People are More Than Connections</H>
            <span className="blue pr3">Volume 13</span>
            <span className="black-50">Published Dec 8 2016</span>
          </div>

          <P>Welcome to Volume 13 of The Rate of Change, hope your having a great week. As I promised, each of these will have a main blog post, and an update about my professional and personal life for this week. So before we get into this week’s article, here’s a quick update on my week.</P>
          <H size={2}>Side Projects - <L hrefLink="http://usequarry.com">usequarry.com</L></H>
          <P>For total honesty and complete transparency, most things have taken a halt this week at Quarry. I’ve been putting off getting into creating marketing materials for launching our new product. I’m worried about not doing it correctly or good enough. It’s funny because I’ve written posts about getting over this but find myself stuck. If you have any words of motivation I’d love to hear them :).</P>
          <H size={2}>Personal Life</H>
          <P>The past week I’ve been focusing on two things:</P>
          <ol className="lh-copy black-70 f4">
            <li>I’ve been working on slowly migrating my blog posts onto a native blog on my website for a more personalized experience, a way to drive more traffic to my site (meeting new people, getting more freelance work, etc.), and just because I want to personalize the typography. Not that Medium doesn’t do an amazing job at this, but I wanted something a little different. Here’s a sneak peak at part of a post’s design!</li>
            <Image imgSrc={imgBlogSneakPeek} imgAlt="Native Blog Post Sneak Peek" />
            <li>As a huge nerd, I’ve been playing every Pokémon game since I got the Red version when I was 4 years old. So, naturally, I’ve been playing the newest Pokémon (I got Sun) and beat the main story besides the Elite 4. My team just isn’t really up to par and I decided to start over to create a better team. I know this all sounds super nerdy but I love video games so don’t judge haha.</li>
          </ol>

          <LineBreak />

          <P><DropCap>Y</DropCap>ou constantly hear that connections are everything. The more people you know, the more well-connected you are and the more valuable you are for others to be connected to. The constant dread of obnoxious “I want connect with you on LinkedIn” emails are always harboring your inbox. You want to have more followers on Twitter and Instagram. But, now you have all these connections at your disposal. Have you ever taken a second to reach out and learn about the people underneath those “connections”?</P>

          <PostEnd />

        </div>
        <Footer />
      </div>
    );
  }
}

export default Sixteen;
