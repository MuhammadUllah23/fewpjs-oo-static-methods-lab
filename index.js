class Formatter {
  //add static methods here
  static capitalize( string ) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize( sentence ) {
    const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let title = [];
    let titleArray = sentence.split(" ")
    for ( let x = 0; x < titleArray.length; x++ ) {
      if ( x == 0 ) {
        title.push( this.capitalize( titleArray[ x ] ) )
      } else {
        if ( exceptions.includes( titleArray[ x ] ) ) {
          title.push( titleArray[ x ] )
        } else {
          title.push( this.capitalize( titleArray[ x ] ) )
        }
      }
    }
    return title.join(" ");
  }
}