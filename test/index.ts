import * as c from 'chai';
import m from 'mocha';

import RPSDownload from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('Download', () => {

  m.it('should download file', async function () {
    let dl = new RPSDownload;

    let output = await dl.download(new RpsContext,{},
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");

    console.log(output);

    let fn:any = await dl.download(new RpsContext,{dest:'./dist2'});
    output = fn(["https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"]);

  console.log(output);

    fn = await dl.download(new RpsContext,{dest:'./dist3'});
    output = fn("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
    
    console.log(output);

  }).timeout(0);

})
