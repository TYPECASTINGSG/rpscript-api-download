import {RpsContext,RpsModule,rpsAction,R} from 'rpscript-interface';
import download from 'download';

/** Module for file download
 * @see {@link https://www.npmjs.com/package/download|Download}
 * @namespace Download
 * @example
 * rps install downloading
*/
@RpsModule("download")
export default class RPSDownload {

/**
 * @function download
 * @memberof Download
 * 
 * download '.' 'http://url/filename.txt'
 * 
 * @param {String} destination 
 * @param {String|Array} url Files to download
 * @param {*} options List of options provided.
 * 
 * @returns {void}
 * @summary figlet :: String → String
 * 
*/
  @rpsAction({verbName:'download'})
  download (ctx:RpsContext,opts:Object, ...params:any[]) : Promise<void|Function>{
    // destination?:string, url?:string|Array<any>
    
    let dl = R.curry(async function (dest,url) {
      if(Array.isArray(url))return Promise.all(url.map(x => download(x, dest, opts)));
      else return await download(url,dest, opts);
    })

    return R.apply(dl,params);
  }

}
