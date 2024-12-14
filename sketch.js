let deck;
let index = 0;
let a = 60;
let ai;
let b = 60;
let bi = 0;
let c = 60;
let ci = 0;
let d = 60;
let di = 0;
let ei = 0;
let f = 60;
let fi = 0;
let g = 60;
let gi = 0;
let h = 60;
let hi = 0;
let i = 60;
let ii = 0;
let ji = 0;
let k = 60;
let ki = 0;
let l = 60;
let li = 0;
let m = 60;
let mi = 0;
let n = 60;
let ni = 0;
let oi = 0;
let p = 60;
let pi = 0;
let qi = 0;
let r = 60;
let ri = 0;
let s = 60;
let si = 0;
let t = 60;
let ti = 0;
let ui = 0;
let v = 60;
let vi = 0;
let w = 60;
let wi = 0;
let xi = 0;
let y = 60;
let yi = 0;
let zi = 0;

function preload() {
  img = loadImage('mtg.jpg','');
}

function setup() {
  createCanvas(944, 564);
  
  loadJSON("https://api.magicthegathering.io/v1/cards", gotData);
}

// load json file
// make button of colors to choose, maybe type??
// find by color or mana cost??
// random builder of 60


function gotData(data) {
  deck = data;
}

function draw() {
  background(0);

  image(img, 0, 0, 944, 564);
  
  if (deck) {
    fill(255);
    textSize(30);
    textAlign(CENTER);
    text(deck.cards[index].name, 300, 250);

    if(deck.cards[index].name[0] == 'A') {
      rect (38, a, 5);

      if (index == 1) {
        rect (38, a - 20, 5);
      }
      if (index == 2) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
      }
      if (index == 3) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
      }
      if (index == 4) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
      }
      if (index == 5) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
      }
      if (index == 6) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
        rect (38, a - 120, 5);
      }
      if (index == 7) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
        rect (38, a - 120, 5);
        rect (38, a - 140, 5);
      }
      if (index == 8) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
        rect (38, a - 120, 5);
        rect (38, a - 140, 5);
        rect (38, a - 160, 5);
      }
      if (index == 9) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
        rect (38, a - 120, 5);
        rect (38, a - 140, 5);
        rect (38, a - 160, 5);
        rect (38, a - 180, 5);
      }
      if (index == 10) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
        rect (38, a - 120, 5);
        rect (38, a - 140, 5);
        rect (38, a - 160, 5);
        rect (38, a - 180, 5);
        rect (38, a - 200, 5);
      }
      if (index == 11) {
        rect (38, a - 20, 5);
        rect (38, a - 40, 5);
        rect (38, a - 60, 5);
        rect (38, a - 80, 5);
        rect (38, a - 100, 5);
        rect (38, a - 120, 5);
        rect (38, a - 140, 5);
        rect (38, a - 160, 5);
        rect (38, a - 180, 5);
        rect (38, a - 200, 5);
        rect (38, a - 220, 5);
      }
      ai = index + 1;

      if (index == 92) {
        ai = 13;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 93) {
        ai = 14;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 94) {
        ai = 15;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 95) {
        ai = 16;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 96) {
        ai = 17;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 97) {
        ai = 18;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 98) {
        ai = 19;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
      if (index == 99) {
        ai = 20;

        text(ai, 40, 75);
        text(bi, 80, 75);
        text(ci, 110, 75);
        text(di, 144, 75);
        text(ei, 175, 75);
        text(fi, 206, 75);
        text(gi, 238, 75);
        text(hi, 270, 75);
        text(ii, 296, 75);
        text(ji, 322, 75);
        text(ki, 351, 75);
        text(li, 383, 75);
        text(mi, 419, 75);
        text(ni, 460, 75);
        text(oi, 496, 75);
        text(pi, 530, 75);
        text(qi, 566, 75);
        text(ri, 597, 75);
        text(si, 635, 75);
        text(ti, 668, 75);
        text(ui, 698, 75);
        text(vi, 730, 75);
        text(wi, 770, 75);
        text(xi, 813, 75);
        text(yi, 844, 75);
        text(zi, 880, 75);
      }
    }
    if(deck.cards[index].name[0] == 'B') {
      text(ai, 40, 75);

      if (index == 12) {
        rect (73, b - 20, 5);
      }
      if (index == 13) {
        rect (73, b - 20, 5);
        rect (73, b - 40, 5);
      }
      if (index == 14) {
        rect (73, b - 20, 5);
        rect (73, b - 40, 5);
        rect (73, b - 60, 5);
      }
      if (index == 15) {
        rect (73, b - 20, 5);
        rect (73, b - 40, 5);
        rect (73, b - 60, 5);
        rect (73, b - 80, 5);
      }
      if (index == 16) {
        rect (73, b - 20, 5);
        rect (73, b - 40, 5);
        rect (73, b - 60, 5);
        rect (73, b - 80, 5);
        rect (73, b - 100, 5);
      }
    }
    if(deck.cards[index].name[0] == 'C') {
        text(ai, 40, 75);
        text(bi, 80, 75);
  
        if (index == 17) {
          rect (110, c - 20, 5);
        }
        if (index == 18) {
          rect (110, c - 20, 5);
          rect (110, c - 40, 5);
        }
    }
    if(deck.cards[index].name[0] == 'D') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);

      if (index == 19) {
        rect (144, d - 20, 5);
      }
    }
    if(deck.cards[index].name[0] == 'F') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);

      if (index == 20) {
        rect(200, f - 20, 5);
      }
      if (index == 21) {
        rect(200, f - 20, 5);
        rect(200, f - 40, 5);
      }
    }
    if(deck.cards[index].name[0] == 'G') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);

      if (index == 22) {
        rect (240, g - 20, 5);
      }
      if (index == 23) {
        rect (240, g - 20, 5);
        rect (240, g - 40, 5);
      }
    }
    if(deck.cards[index].name[0] == 'H') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);

      if (index == 24) {
        rect (270, h - 20, 5);
      }
      if (index == 25) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
      }
      if (index == 26) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
        rect (270, h - 60, 5);
      }
      if (index == 27) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
        rect (270, h - 60, 5);
        rect (270, h - 80, 5);
      }
      if (index == 28) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
        rect (270, h - 60, 5);
        rect (270, h - 80, 5);
        rect (270, h - 100, 5);
      }
      if (index == 29) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
        rect (270, h - 60, 5);
        rect (270, h - 80, 5);
        rect (270, h - 100, 5);
        rect (270, h - 120, 5);
      }
      if (index == 30) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
        rect (270, h - 60, 5);
        rect (270, h - 80, 5);
        rect (270, h - 100, 5);
        rect (270, h - 120, 5);
        rect (270, h - 140, 5);
      }
      if (index == 31) {
        rect (270, h - 20, 5);
        rect (270, h - 40, 5);
        rect (270, h - 60, 5);
        rect (270, h - 80, 5);
        rect (270, h - 100, 5);
        rect (270, h - 120, 5);
        rect (270, h - 140, 5);
        rect (270, h - 160, 5);
      }
    }
    if(deck.cards[index].name[0] == 'I') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);

      if (index == 32) {
        rect (296, i - 20, 5);
      }
    }
    if(deck.cards[index].name[0] == 'K') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);

      if (index == 33) {
        rect (347, k - 20, 5);
      }
    }
    if(deck.cards[index].name[0] == 'L') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);

      if (index == 34) {
        rect (384, l - 20, 5);
      }
      if (index == 35) {
        rect (384, l - 20, 5);
        rect (384, l - 40, 5);
      }
      if (index == 36) {
        rect (384, l - 20, 5);
        rect (384, l - 40, 5);
        rect (384, l - 60, 5);
      }
    }
    if(deck.cards[index].name[0] == 'M') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);

      if (index == 37) {
        rect (411, m - 20, 5);
      }
      if (index == 38) {
        rect (411, m - 20, 5);
        rect (411, m - 40, 5);
      }
    }
    if(deck.cards[index].name[0] == 'N') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);

      if (index == 39) {
        rect (464, n - 20, 5);
      }
      if (index == 40) {
        rect (464, n - 20, 5);
        rect (464, n - 40, 5);
      }
    }
    if(deck.cards[index].name[0] == 'P') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);

      if (index == 41) {
        rect (532, p - 20, 5);
      }
      if (index == 42) {
        rect (532, p - 20, 5);
        rect (532, p - 40, 5);
      }
      if (index == 43) {
        rect (532, p - 20, 5);
        rect (532, p - 40, 5);
        rect (532, p - 60, 5);
      }
      if (index == 44) {
        rect (532, p - 20, 5);
        rect (532, p - 40, 5);
        rect (532, p - 60, 5);
        rect (532, p - 80, 5);
      }
      if (index == 45) {
        rect (532, p - 20, 5);
        rect (532, p - 40, 5);
        rect (532, p - 60, 5);
        rect (532, p - 80, 5);
        rect (532, p - 100, 5);
      }
      if (index == 46) {
        rect (532, p - 20, 5);
        rect (532, p - 40, 5);
        rect (532, p - 60, 5);
        rect (532, p - 80, 5);
        rect (532, p - 100, 5);
        rect (532, p - 120, 5);
      }
    }
    if(deck.cards[index].name[0] == 'R') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);
      text(pi, 530, 75);
      text(qi, 566, 75);

      if (index == 47) {
        rect (599, r - 20, 5);
      }
      if (index == 48) {
        rect (599, r - 20, 5);
        rect (599, r - 40, 5);
      }
      if (index == 49) {
        rect (599, r - 20, 5);
        rect (599, r - 40, 5);
        rect (599, r - 60, 5);
      }
      if (index == 50) {
        rect (599, r - 20, 5);
        rect (599, r - 40, 5);
        rect (599, r - 60, 5);
        rect (599, r - 80, 5);
      }
      if (index == 51) {
        rect (599, r - 20, 5);
        rect (599, r - 40, 5);
        rect (599, r - 60, 5);
        rect (599, r - 80, 5);
        rect (599, r - 100, 5);
      }
    }
    if(deck.cards[index].name[0] == 'S') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);
      text(pi, 530, 75);
      text(qi, 566, 75);
      text(ri, 597, 75);

      if (index == 52) {
        rect (630, s - 20, 5);
      }
      if (index == 53) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
      }
      if (index == 54) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
      }
      if (index == 55) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
      }
      if (index == 56) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
      }
      if (index == 57) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
      }
      if (index == 58) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
      }
      if (index == 59) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
      }
      if (index == 60) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
      }
      if (index == 61) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
      }
      if (index == 62) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
      }
      if (index == 63) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
      }
      if (index == 64) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
      }
      if (index == 65) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
      }
      if (index == 66) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
      }
      if (index == 67) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
        rect (630, s - 320, 5);
      }
      if (index == 68) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
        rect (630, s - 320, 5);
        rect (630, s - 340, 5);
      }
      if (index == 69) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
        rect (630, s - 320, 5);
        rect (630, s - 340, 5);
        rect (630, s - 360, 5);
      }
      if (index == 70) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
        rect (630, s - 320, 5);
        rect (630, s - 340, 5);
        rect (630, s - 360, 5);
        rect (630, s - 380, 5);
      }
      if (index == 71) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
        rect (630, s - 320, 5);
        rect (630, s - 340, 5);
        rect (630, s - 360, 5);
        rect (630, s - 380, 5);
        rect (630, s - 400, 5);
      }
      if (index == 72) {
        rect (630, s - 20, 5);
        rect (630, s - 40, 5);
        rect (630, s - 60, 5);
        rect (630, s - 80, 5);
        rect (630, s - 100, 5);
        rect (630, s - 120, 5);
        rect (630, s - 140, 5);
        rect (630, s - 160, 5);
        rect (630, s - 180, 5);
        rect (630, s - 200, 5);
        rect (630, s - 220, 5);
        rect (630, s - 240, 5);
        rect (630, s - 260, 5);
        rect (630, s - 280, 5);
        rect (630, s - 300, 5);
        rect (630, s - 320, 5);
        rect (630, s - 340, 5);
        rect (630, s - 360, 5);
        rect (630, s - 380, 5);
        rect (630, s - 400, 5);
        rect (630, s - 420, 5);
      }
    }
    if(deck.cards[index].name[0] == 'T') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);
      text(pi, 530, 75);
      text(qi, 566, 75);
      text(ri, 597, 75);
      text(si, 635, 75);

      if (index == 73) {
        rect (660, t - 20, 5);
      }
      if (index == 74) {
        rect (660, t - 20, 5);
        rect (660, t - 40, 5);
      }
      if (index == 75) {
        rect (660, t - 20, 5);
        rect (660, t - 40, 5);
        rect (660, t - 60, 5);
      }
      if (index == 76) {
        rect (660, t - 20, 5);
        rect (660, t - 40, 5);
        rect (660, t - 60, 5);
        rect (660, t - 80, 5);
      }
      if (index == 77) {
        rect (660, t - 20, 5);
        rect (660, t - 40, 5);
        rect (660, t - 60, 5);
        rect (660, t - 80, 5);
        rect (660, t - 100, 5);
      }
      if (index == 78) {
        rect (660, t - 20, 5);
        rect (660, t - 40, 5);
        rect (660, t - 60, 5);
        rect (660, t - 80, 5);
        rect (660, t - 100, 5);
        rect (660, t - 120, 5);
      }
    }
    if(deck.cards[index].name[0] == 'V') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);
      text(pi, 530, 75);
      text(qi, 566, 75);
      text(ri, 597, 75);
      text(si, 635, 75);
      text(ti, 668, 75);
      text(ui, 698, 75);

      if (index == 79) {
        rect (728, v - 20, 5);
      }
      if (index == 80) {
        rect (728, v - 20, 5);
        rect (728, v - 40, 5);
      }
      if (index == 81) {
        rect (728, v - 20, 5);
        rect (728, v - 40, 5);
        rect (728, v - 60, 5);
      }
    }
    if(deck.cards[index].name[0] == 'W') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);
      text(pi, 530, 75);
      text(qi, 566, 75);
      text(ri, 597, 75);
      text(si, 635, 75);
      text(ti, 668, 75);
      text(ui, 698, 75);
      text(vi, 730, 75);

      if (index == 82) {
        rect (760, w - 20, 5);
      }
      if (index == 83) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
      }
      if (index == 84) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
        rect (760, w - 60, 5);
      }
      if (index == 85) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
        rect (760, w - 60, 5);
        rect (760, w - 80, 5);
      }
      if (index == 86) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
        rect (760, w - 60, 5);
        rect (760, w - 80, 5);
        rect (760, w - 100, 5);
      }
      if (index == 87) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
        rect (760, w - 60, 5);
        rect (760, w - 80, 5);
        rect (760, w - 100, 5);
        rect (760, w - 120, 5);
      }
      if (index == 88) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
        rect (760, w - 60, 5);
        rect (760, w - 80, 5);
        rect (760, w - 100, 5);
        rect (760, w - 120, 5);
        rect (760, w - 140, 5);
      }
      if (index == 89) {
        rect (760, w - 20, 5);
        rect (760, w - 40, 5);
        rect (760, w - 60, 5);
        rect (760, w - 80, 5);
        rect (760, w - 100, 5);
        rect (760, w - 120, 5);
        rect (760, w - 140, 5);
        rect (760, w - 160, 5);
      }
    }
    if(deck.cards[index].name[0] == 'Y') {
      text(ai, 40, 75);
      text(bi, 80, 75);
      text(ci, 110, 75);
      text(di, 144, 75);
      text(ei, 175, 75);
      text(fi, 206, 75);
      text(gi, 238, 75);
      text(hi, 270, 75);
      text(ii, 296, 75);
      text(ji, 322, 75);
      text(ki, 351, 75);
      text(li, 383, 75);
      text(mi, 419, 75);
      text(ni, 460, 75);
      text(oi, 496, 75);
      text(pi, 530, 75);
      text(qi, 566, 75);
      text(ri, 597, 75);
      text(si, 635, 75);
      text(ti, 668, 75);
      text(ui, 698, 75);
      text(vi, 730, 75);
      text(wi, 770, 75);
      text(xi, 813, 75);

      if (index == 90) {
        rect (844, y - 20, 5);
      }
      if (index == 91) {
        rect (844, y - 20, 5);
        rect (844, y - 40, 5);
      }
    }
  }
}

  
function mousePressed() {
    index = index + 1;

    a = a + 20;
    if(deck.cards[index].name[0] == 'B') {
      bi = bi + 1;

      b = b + 20;
    }
    if(deck.cards[index].name[0] == 'C') {
      ci = ci + 1;

      c = c + 20;
    }
    if(deck.cards[index].name[0] == 'D') {
      di = di + 1;

      d = d + 20;
    }
    if(deck.cards[index].name[0] == 'E') {
      ei = ei + 1;
    }
    if(deck.cards[index].name[0] == 'F') {
      fi = fi + 1;

      f = f + 20;
    }
    if(deck.cards[index].name[0] == 'G') {
      gi = gi + 1;

      g = g + 20;
    }
    if(deck.cards[index].name[0] == 'H') {
      hi = hi + 1;

      h = h + 20;
    }
    if(deck.cards[index].name[0] == 'I') {
      ii = ii + 1;

      i = i + 20;
    }
    if(deck.cards[index].name[0] == 'J') {
      ji = ji + 1;
    }
    if(deck.cards[index].name[0] == 'K') {
      ki = ki + 1;

      k = k + 20;
    }
    if(deck.cards[index].name[0] == 'L') {
      li = li + 1;

      l = l + 20;
    }
    if(deck.cards[index].name[0] == 'M') {
      mi = mi + 1;

      m = m + 20;
    }
    if(deck.cards[index].name[0] == 'N') {
      ni = ni + 1;

      n = n + 20;
    }
    if(deck.cards[index].name[0] == 'O') {
      oi = oi + 1;
    }
    if(deck.cards[index].name[0] == 'P') {
      pi = pi + 1;

      p = p + 20;
    }
    if(deck.cards[index].name[0] == 'Q') {
      qi = qi + 1;
    }
    if(deck.cards[index].name[0] == 'R') {
      ri = ri + 1;

      r = r + 20;
    }
    if(deck.cards[index].name[0] == 'S') {
      si = si + 1;

      s = s + 20;
    }
    if(deck.cards[index].name[0] == 'T') {
      ti = ti + 1;

      t = t + 20;
    }
    if(deck.cards[index].name[0] == 'U') {
      ui = ui + 1;
    }
    if(deck.cards[index].name[0] == 'V') {
      vi = vi + 1;

      v = v + 20;
    }
    if(deck.cards[index].name[0] == 'W') {
      wi = wi + 1;

      w = w + 20;
    }
    if(deck.cards[index].name[0] == 'X') {
      xi = xi + 1;

      x = x + 20;
    }
    if(deck.cards[index].name[0] == 'Y') {
      yi = yi + 1;

      y = y + 20;
    }

    if (index == cards.length) {
      index = 0;
    }
}
