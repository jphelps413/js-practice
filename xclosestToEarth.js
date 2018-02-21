class StarField {
  // Constructs a sized collection of "stars" with random offsets plus the
  // 10 known closest entries from Top10. FWIW, the xyz values are
  // contrived but the resultant distance calculation will yield values
  // which are close to their actual distances from Earth, in light years.
  constructor(size = 100) {
    const Top10 = [
      /*eslint-disable */
      { x: 2, y: 3, z: 3, n: 'Alpha Centauri A' },
      { x: 2, y: 3, z: 3, n: 'Alpha Centauri B' },
      { x: 2, y: 2, z: 3, n: 'Alpha Centauri C' },
      { x: 3, y: 3, z: 4, n: 'Barnard\'s Star' },
      { x: 4, y: 3, z: 4, n: 'Wolf 359' },
      { x: 5, y: 5, z: 4, n: 'Luyten 726-8 A' },
      { x: 5, y: 5, z: 4, n: 'Luyten 726-8 B' },
      { x: 5, y: 5, z: 5, n: 'Sirius A' },
      { x: 5, y: 5, z: 5, n: 'Sirius B' },
      { x: 5, y: 6, z: 6, n: 'Ross 154' },
      /* eslint-enable */
    ];

    // Generate random stars outside the last star in Top10
    const randInt = max => Math.floor(Math.random() * max);
    const randDelt = (base = 7) => randInt(10) + base;
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
}

const StarList = new StarField(50);

class StarsByDistance {
  constructor(keep = 10) {
    this.keep = 10;
    this.rebalance = keep * 2;
    this.maxDist = Infinity;
    this.inserted = 0;
    this.stars = [];
  }

  static divide(ary) {
    const half = Math.floor(ary.length / 2);
    return [ary.slice(0, half), ary.slice(half, ary.length)];
  }

  static conquer(a, b) {
    const m = [];
    while (a.length > 0 && b.length > 0) {
      m.push(a[0].dist < b[0].dist ? a.shift() : b.shift());
    }
    return [...m, ...a, ...b];
  }

  cullOutliers(a) {
    if (a.length <= 1) return a;
    const [l, r] = this.divide(a);
    return this.conquer(this.cullOutliers(l), this.cullOutliers(r));
  }

  add(star) {
    const distance = (x, y, z) => Math.sqrt((x ** x) + (y ** y) + (z ** z));
    star.dist = distance(star.x, star.y, star.z);
    this.stars.push(star);
    if (this.stars.length >= this.rebalance) this.cullOutliers();
    return this.stars.length;
  }
}

function closestStars(maxStars = 10) {
  const closest = [];
}
