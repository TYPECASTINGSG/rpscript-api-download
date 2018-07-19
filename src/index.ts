import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import download from 'download';

/** Module for file download
 * @see {@link https://www.npmjs.com/package/download|Download}
 * @namespace Download
 * @example
 * rps install download
*/
@RpsModule("download")
export default class RPSDownload {

/**
 * @function download
 * @memberof Download
 * 
 * 
*/
  @rpsAction({verbName:'download'})
  async download (ctx:RpsContext,opts:Object, url:string|Array<any>, destination:string) : Promise<any>{
    if(Array.isArray(url))return Promise.all(url.map(x => download(x, destination)));
    else return download(url,destination);
  }

}
