var obj = {
  count: 0,
  cool: function coolFn() {
    console.log(`in obj ${this.count}`);
    if (this.count < 1) {
      setTimeout( () => { // arrow-function ftw?
	this.count++;
	console.log( `awesome? ${this.count}` );
      }, 1000 );
    }
  }
};

obj.cool(); // awesome?
obj.cool(); // awesome?
obj.cool(); // awesome?
