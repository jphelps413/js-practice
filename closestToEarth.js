//
// To run this => node closestToEarth.js
//
class StarField {
  // Constructs a sized collection of "stars" with random offsets plus the
  // 10 known closest entries from Top10. FWIW, the xyz values are
  // contrived but derived from the values given at:
  //     https://www.britannica.com/topic/20-Nearest-Stars-1793432
  constructor(size = 100) {
    const Top10 = [
      /*eslint-disable */
      { x: 2.0, y: 2.0, z: 2.5, n: 'Alpha Centauri' },
      { x: 2.2, y: 2.2, z: 2.4, n: 'Proxima Centauri' },
      { x: 2.1, y: 2.1, z: 3.0, n: 'Barnard\'s Star' },
      { x: 2.3, y: 2.4, z: 3.0, n: 'WISE 1049-5319' },
      { x: 2.8, y: 2.8, z: 3.0, n: 'Wolf 359' },
      { x: 2.8, y: 2.8, z: 3.1, n: 'Lalande 21185' },
      { x: 2.8, y: 2.9, z: 3.1, n: 'Sirius' },
      { x: 2.9, y: 2.9, z: 3.1, n: 'BL/UV Ceti' },
      { x: 2.9, y: 2.9, z: 3.3, n: 'Ross 154' },
      { x: 2.9, y: 2.9, z: 3.4, n: 'Ross 248' },
      /* eslint-enable */
    ];

    // Generate random stars outside the last star in Top10
    const randInt = max => Math.floor(Math.random() * max);
    const randDelt = (base = 4) => randInt(1000) + base;
    this.stars = [];
    for (let i = 0; i < size - Top10.length; i += 1) {
      const sid = randInt(1000).toString().padStart(4, '0');
      this.stars.push({
        x: randDelt(), y: randDelt(), z: randDelt(), n: `Random ${sid}`,
      });
    }

    // Randomly insert the Top10 to completely fill the test star field
    for (let i = 0; i < Top10.length; i += 1) {
      this.stars.splice(randInt(this.stars.length), 0, Top10[i]);
    }
  }

  // Return a size with commas in it for readability.
  size(num = this.stars.length) {
    return [...`${num}`]
      .reverse()
      .join('')          // There
      .match(/\d{1,3}/g) //  must
      .join(',')         //   be a
      .split('')         //    better
      .reverse()         //     way...
      .join('');
  }
}

// This class will accumulate the closest number of stars specified at
// construction. It performs this using a merge sort approach, and will
// only do this when it hits 10 times the number to keep, since every time
// would be a bit wasteful. For example, if we want the top 10 closest
// stars, then we simply need to continuously call the add method, and
// every 100 adds, we merge sort the closest "keep" and elminate the rest.
// It might be an interesting experiment to try a binary tree and a BFS to
// see if we can get a perfomance boost out of it since the original
// problem is sized at 100 billion stars.
class StarsByDistance {
  constructor(keep = 10) {
    this.keep = keep;
    this.cullThreshold = keep * 10;
    this.stars = [];
  }

  // This method performs a merge sort to bring the closest stars to the
  // forefront, and then lops off the outliers. This eliminates any need
  // for tracking a max distance, and index to it, which is where I went
  // off the rails during the interview. Note that the number to keep may
  // be specified at instantiation of this class, so a final call to this
  // method may be necessary if the number to keep is not modulus to the
  // number of stars in the test star field.
  cullOutliers(stars = this.stars) {
    const divide = (ary) => {
      const half = Math.floor(ary.length / 2);
      return [ary.slice(0, half), ary.slice(half, ary.length)];
    };

    const conquer = (a, b) => {
      const m = [];
      while (a.length > 0 && b.length > 0) {
        m.push(a[0].dist < b[0].dist ? a.shift() : b.shift());
      }
      return [...m, ...a, ...b];
    };

    if (stars.length <= 1) return stars;
    const [l, r] = divide(stars);
    // It is purported that merge sorts are O(n log n) which isn't bad, but
    // would a binary tree and BFS be better? This is probably a wash since
    // we're chunking the data and not sorting millions of records at a
    // time. Right?
    const culled = conquer(this.cullOutliers(l), this.cullOutliers(r));
    return culled.slice(0, this.keep);
  }

  add(star) {
    // Transcribe the data to avoid lint errors about modifying the
    // prototype of each star object passed in.
    const distance = (x, y, z) => Math.sqrt((x ** x) + (y ** y) + (z ** z));
    this.stars.push({
      name: star.n,
      dist: distance(star.x, star.y, star.z),
      x: star.x,
      y: star.y,
      z: star.z,
    });

    if (this.stars.length >= this.cullThreshold) {
      this.stars = this.cullOutliers(this.stars);
    }

    return this.stars.length;
  }

  strout(star) {
    return star.name.padStart(18) + ' ' +
      star.dist.toFixed(1).padStart(6) +
      star.x.toFixed(1).padStart(6) +
      star.y.toFixed(1).padStart(6) +
      star.z.toFixed(1).padStart(6);
  }

  dump(scount) {
    // home the cursor on line 3 before logging the stars.
    console.log(`[3;0HStars Searched: ${StarList.size(scount)}\n`)
    for (let i = 0; i < this.keep; i += 1) {
      console.log(`${this.strout(this.stars[i])}[K`);
    }
  }
}

console.log('[2J[0;0HGenerating Star Field Data...');
const StarList = new StarField(1e7);
const closestStars = new StarsByDistance(10);

console.log(`Find the closest from ${StarList.size()} stars...`);
for (let i = 0; i < StarList.stars.length; i += 1) {
  closestStars.add(StarList.stars[i]);
  if (i > 0 && i % 100 === 0) closestStars.dump(i);
}

closestStars.dump(StarList.size());
console.log();
