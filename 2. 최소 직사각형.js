function solution(sizes) {
    const reverse = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    
    let maxH = 0;
    let maxY = 0;
    
    for (let i = 0; i < reverse.length; i++) {
        const w = reverse[i][0];
        const h = reverse[i][1];

        if (maxH < w) maxH = w;
        if (maxY < h) maxY = h;
    }

    return maxH * maxY;
}