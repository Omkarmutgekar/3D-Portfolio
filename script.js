function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length 
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./vector/male0001.png
     ./vector/male0002.png
     ./vector/male0003.png
     ./vector/male0004.png
     ./vector/male0005.png
     ./vector/male0006.png
     ./vector/male0007.png
     ./vector/male0008.png
     ./vector/male0009.png
     ./vector/male0010.png
     ./vector/male0011.png
     ./vector/male0012.png
     ./vector/male0013.png
     ./vector/male0014.png
     ./vector/male0015.png
     ./vector/male0016.png
     ./vector/male0017.png
     ./vector/male0018.png
     ./vector/male0019.png
     ./vector/male0020.png
     ./vector/male0021.png
     ./vector/male0022.png
     ./vector/male0023.png
     ./vector/male0024.png
     ./vector/male0025.png
     ./vector/male0026.png
     ./vector/male0027.png
     ./vector/male0028.png
     ./vector/male0029.png
     ./vector/male0030.png
     ./vector/male0031.png
     ./vector/male0032.png
     ./vector/male0033.png
     ./vector/male0034.png
     ./vector/male0035.png
     ./vector/male0036.png
     ./vector/male0037.png
     ./vector/male0038.png
     ./vector/male0039.png
     ./vector/male0040.png
     ./vector/male0041.png
     ./vector/male0042.png
     ./vector/male0043.png
     ./vector/male0044.png
     ./vector/male0045.png
     ./vector/male0046.png
     ./vector/male0047.png
     ./vector/male0048.png
     ./vector/male0049.png
     ./vector/male0050.png
     ./vector/male0051.png
     ./vector/male0052.png
     ./vector/male0053.png
     ./vector/male0054.png
     ./vector/male0055.png
     ./vector/male0056.png
     ./vector/male0057.png
     ./vector/male0058.png
     ./vector/male0059.png
     ./vector/male0060.png
     ./vector/male0061.png
     ./vector/male0062.png
     ./vector/male0063.png
     ./vector/male0064.png
     ./vector/male0065.png
     ./vector/male0066.png
     ./vector/male0067.png
     ./vector/male0068.png
     ./vector/male0069.png
     ./vector/male0070.png
     ./vector/male0071.png
     ./vector/male0072.png
     ./vector/male0073.png
     ./vector/male0074.png
     ./vector/male0075.png
     ./vector/male0076.png
     ./vector/male0077.png
     ./vector/male0078.png
     ./vector/male0079.png
     ./vector/male0080.png
     ./vector/male0081.png
     ./vector/male0082.png
     ./vector/male0083.png
     ./vector/male0084.png
     ./vector/male0085.png
     ./vector/male0086.png
     ./vector/male0087.png
     ./vector/male0088.png
     ./vector/male0089.png
     ./vector/male0090.png
     ./vector/male0091.png
     ./vector/male0092.png
     ./vector/male0093.png
     ./vector/male0094.png
     ./vector/male0095.png
     ./vector/male0096.png
     ./vector/male0097.png
     ./vector/male0098.png
     ./vector/male0099.png
     ./vector/male0100.png
     ./vector/male0101.png
     ./vector/male0102.png
     ./vector/male0103.png
     ./vector/male0104.png
     ./vector/male0105.png
     ./vector/male0106.png
     ./vector/male0107.png
     ./vector/male0108.png
     ./vector/male0109.png
     ./vector/male0110.png
     ./vector/male0111.png
     ./vector/male0112.png
     ./vector/male0113.png
     ./vector/male0114.png
     ./vector/male0115.png
     ./vector/male0116.png
     ./vector/male0117.png
     ./vector/male0118.png
     ./vector/male0119.png
     ./vector/male0120.png
     ./vector/male0121.png
     ./vector/male0122.png
     ./vector/male0123.png
     ./vector/male0124.png
     ./vector/male0125.png
     ./vector/male0126.png
     ./vector/male0127.png
     ./vector/male0128.png
     ./vector/male0129.png
     ./vector/male0130.png
     ./vector/male0131.png
     ./vector/male0132.png
     ./vector/male0133.png
     ./vector/male0134.png
     ./vector/male0135.png
     ./vector/male0136.png
     ./vector/male0137.png
     ./vector/male0138.png
     ./vector/male0139.png
     ./vector/male0140.png
     ./vector/male0141.png
     ./vector/male0142.png
     ./vector/male0143.png
     ./vector/male0144.png
     ./vector/male0145.png
     ./vector/male0146.png
     ./vector/male0147.png
     ./vector/male0148.png
     ./vector/male0149.png
     ./vector/male0150.png
     ./vector/male0151.png
     ./vector/male0152.png
     ./vector/male0153.png
     ./vector/male0154.png
     ./vector/male0155.png
     ./vector/male0156.png
     ./vector/male0157.png
     ./vector/male0158.png
     ./vector/male0159.png
     ./vector/male0160.png
     ./vector/male0161.png
     ./vector/male0162.png
     ./vector/male0163.png
     ./vector/male0164.png
     ./vector/male0165.png
     ./vector/male0166.png
     ./vector/male0167.png
     ./vector/male0168.png
     ./vector/male0169.png
     ./vector/male0170.png
     ./vector/male0171.png
     ./vector/male0172.png
     ./vector/male0173.png
     ./vector/male0174.png
     ./vector/male0175.png
     ./vector/male0176.png
     ./vector/male0177.png
     ./vector/male0178.png
     ./vector/male0179.png
     ./vector/male0180.png
     ./vector/male0181.png
     ./vector/male0182.png
     ./vector/male0183.png
     ./vector/male0184.png
     ./vector/male0185.png
     ./vector/male0186.png
     ./vector/male0187.png
     ./vector/male0188.png
     ./vector/male0189.png
     ./vector/male0190.png
     ./vector/male0191.png
     ./vector/male0192.png
     ./vector/male0193.png
     ./vector/male0194.png
     ./vector/male0195.png
     ./vector/male0196.png
     ./vector/male0197.png
     ./vector/male0198.png
     ./vector/male0199.png
     ./vector/male0200.png
     ./vector/male0201.png
     ./vector/male0202.png
     ./vector/male0203.png
     ./vector/male0204.png
     ./vector/male0205.png
     ./vector/male0206.png
     ./vector/male0207.png
     ./vector/male0208.png
     ./vector/male0209.png
     ./vector/male0210.png
     ./vector/male0211.png
     ./vector/male0212.png
     ./vector/male0213.png
     ./vector/male0214.png
     ./vector/male0215.png
     ./vector/male0216.png
     ./vector/male0217.png
     ./vector/male0218.png
     ./vector/male0219.png
     ./vector/male0220.png
     ./vector/male0221.png
     ./vector/male0222.png
     ./vector/male0223.png
     ./vector/male0224.png
     ./vector/male0225.png
     ./vector/male0226.png
     ./vector/male0227.png
     ./vector/male0228.png
     ./vector/male0229.png
     ./vector/male0230.png
     ./vector/male0231.png
     ./vector/male0232.png
     ./vector/male0233.png
     ./vector/male0234.png
     ./vector/male0235.png
     ./vector/male0236.png
     ./vector/male0237.png
     ./vector/male0238.png
     ./vector/male0239.png
     ./vector/male0240.png
     ./vector/male0241.png
     ./vector/male0242.png
     ./vector/male0243.png
     ./vector/male0244.png
     ./vector/male0245.png
     ./vector/male0246.png
     ./vector/male0247.png
     ./vector/male0248.png
     ./vector/male0249.png
     ./vector/male0250.png
     ./vector/male0251.png
     ./vector/male0252.png
     ./vector/male0253.png
     ./vector/male0254.png
     ./vector/male0255.png
     ./vector/male0256.png
     ./vector/male0257.png
     ./vector/male0258.png
     ./vector/male0259.png
     ./vector/male0260.png
     ./vector/male0261.png
     ./vector/male0262.png
     ./vector/male0263.png
     ./vector/male0264.png
     ./vector/male0265.png
     ./vector/male0266.png
     ./vector/male0267.png
     ./vector/male0268.png
     ./vector/male0269.png
     ./vector/male0270.png
     ./vector/male0271.png
     ./vector/male0272.png
     ./vector/male0273.png
     ./vector/male0274.png
     ./vector/male0275.png
     ./vector/male0276.png
     ./vector/male0277.png
     ./vector/male0278.png
     ./vector/male0279.png
     ./vector/male0280.png
     ./vector/male0281.png
     ./vector/male0282.png
     ./vector/male0283.png
     ./vector/male0284.png
     ./vector/male0285.png
     ./vector/male0286.png
     ./vector/male0287.png
     ./vector/male0288.png
     ./vector/male0289.png
     ./vector/male0290.png
     ./vector/male0291.png
     ./vector/male0292.png
     ./vector/male0293.png
     ./vector/male0294.png
     ./vector/male0295.png
     ./vector/male0296.png
     ./vector/male0297.png
     ./vector/male0298.png
     ./vector/male0299.png
     ./vector/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

