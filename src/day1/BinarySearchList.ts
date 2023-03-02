export default function bs_list(haystack: number[], needle: number): boolean {
    /**
     * We set the pointers to both end of the array lo & hi, then we get the mid point(m) and check
     * if it's the value we want, if it's not then we check the size, if it's > the needle
     * we set the high pointer to m-1 else we set the lo pointer to m+1, all these is done
     * while lo < hi
     */
    let lo = 0;
    let h = haystack.length;
    do {
        let m = Math.floor(lo + (h - lo) / 2);
        if (haystack[m] === needle) {
            return true;
        } else if (haystack[m] > needle) {
            h = m - 1;
        } else {
            lo = m + 1;
        }
    } while (lo < h);
    return false;
}
