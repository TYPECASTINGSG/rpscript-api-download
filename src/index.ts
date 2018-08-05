import {RpsContext,RpsModule,rpsAction,R} from 'rpscript-interface';
import download from 'download';
import deasyncPromise from 'deasync-promise';

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
 * @example
 * download 'http://url/filename.txt'
 * 
 * @param {String|Array} url Files to download
 * @param {*} options List of options provided.
 * 
 * @returns {void}
 * @summary download :: String|Array → Buffer
 * 
*/
  @rpsAction({verbName:'download'})
  async download (ctx:RpsContext,opts:Object, url?:any[]|string) : Promise<Buffer|Function>{
    let dest:string = opts['dest'] || '.';

    function fn (urls) {
      if(Array.isArray(urls)) 
        return deasyncPromise(Promise.all(urls.map(x => download(x, dest, opts))));
      else 
        return deasyncPromise(download(urls,dest, opts));
    }

    if(url) return await fn(url);
    else return fn;
  }

}
