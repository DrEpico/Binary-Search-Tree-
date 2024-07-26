(()=>{"use strict";class t{constructor(t){this.data=t,this.left=null,this.right=null}}const e=(t,l="",r=!0)=>{null!==t&&(null!==t.right&&e(t.right,`${l}${r?"│   ":"    "}`,!1),console.log(`${l}${r?"└── ":"┌── "}${t.data}`),null!==t.left&&e(t.left,`${l}${r?"    ":"│   "}`,!0))},l=new class{constructor(t){this.root=this.buildTree(t)}buildTree(t){return 0===t.length?null:(t=[...new Set(t)].sort(((t,e)=>t-e)),this.buildTreeHelper(t,0,t.length-1))}buildTreeHelper(e,l,r){if(l>r)return null;const i=Math.floor((l+r)/2),n=new t(e[i]);return n.left=this.buildTreeHelper(e,l,i-1),n.right=this.buildTreeHelper(e,i+1,r),n}insert(e){const l=new t(e);if(!this.root)return void(this.root=l);let r=this.root,i=null;for(;r;)if(i=r,e<r.data){if(r=r.left,!r)return void(i.left=l)}else{if(!(e>r.data))return;if(r=r.right,!r)return void(i.right=l)}}deleteItem(t,e){if(null===t)return t;if(e<t.data)t.left=this.deleteItem(t.left,e);else if(e>t.data)t.right=this.deleteItem(t.right,e);else{if(null===t.left)return t.right;if(null===t.right)return t.left;t.data=this.minValue(t.right),t.right=this.deleteItem(t.right,t.data)}return t}minValue(t){let e=t.data;for(;null!==t.left;)e=t.left.data,t=t.left;return e}find(t){let e=this.root;for(;e;)if(t<e.data)e=e.left;else{if(!(t>e.data))return e;e=e.right}return null}}([10,5,20,3,7,15,30]);console.log(l.root),console.log(e(l.root))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVExQixTQUNmLE1BQUl3QixFQUFRRSxFQUFRNUIsTUFHdkIsT0FBTzRCLEVBRlBBLEVBQVVBLEVBQVF6QixLQUd0QixDQUVKLE9BQU8sSUFDWCxHQ2hIVSxDQUFDLEdBQUksRUFBRyxHQUFJLEVBQUcsRUFBRyxHQUFJLEtBR3BDSyxRQUFRQyxJQUFJQyxFQUFLRSxNQUVqQkosUUFBUUMsSUFBSUwsRUFBWU0sRUFBS0UsTSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwaWRlbW8vLi9zcmMvYmluYXJ5U2VhcmNoVHJlZS5qcyIsIndlYnBhY2s6Ly9hcGlkZW1vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3IoYXJyYXkpe1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZShhcnJheSk7XG4gICAgfVxuXG4gICAgYnVpbGRUcmVlKGFycmF5KXtcbiAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb3J0IHRoZSBhcnJheSBhbmQgcmVtb3ZlIGR1cGxpY2F0ZXNcbiAgICAgICAgYXJyYXkgPSBbLi4ubmV3IFNldChhcnJheSldLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRyZWVIZWxwZXIoYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGJ1aWxkVHJlZUhlbHBlcihhcnJheSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShhcnJheVttaWRdKTtcblxuICAgICAgICBub2RlLmxlZnQgPSB0aGlzLmJ1aWxkVHJlZUhlbHBlcihhcnJheSwgc3RhcnQsIG1pZCAtIDEpO1xuICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5idWlsZFRyZWVIZWxwZXIoYXJyYXksIG1pZCArIDEsIGVuZCk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaW5zZXJ0KHZhbHVlKXtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcblxuICAgICAgICBpZiAoIXRoaXMucm9vdCkge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5yb290O1xuICAgICAgICBsZXQgcGFyZW50ID0gbnVsbDtcblxuICAgICAgICB3aGlsZShjdXJyZW50KXtcbiAgICAgICAgICAgIHBhcmVudCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBpZih2YWx1ZSA8IGN1cnJlbnQuZGF0YSl7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubGVmdDtcbiAgICAgICAgICAgICAgICBpZighY3VycmVudCl7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5sZWZ0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBjdXJyZW50LmRhdGEpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnJpZ2h0O1xuICAgICAgICAgICAgICAgIGlmKCFjdXJyZW50KXtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJpZ2h0ID0gbmV3Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGRhdGEgPT09IHZhbHVlXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGRlbGV0ZUl0ZW0ocm9vdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICAgICAgICByb290LmxlZnQgPSB0aGlzLmRlbGV0ZUl0ZW0ocm9vdC5sZWZ0LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAgICAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZUl0ZW0ocm9vdC5yaWdodCwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290LnJpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvb3QubGVmdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm9vdC5kYXRhID0gdGhpcy5taW5WYWx1ZShyb290LnJpZ2h0KTtcblxuICAgICAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlSXRlbShyb290LnJpZ2h0LCByb290LmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cblxuICAgIG1pblZhbHVlKG5vZGUpIHtcbiAgICAgICAgbGV0IG1pblZhbCA9IG5vZGUuZGF0YTtcbiAgICAgICAgd2hpbGUgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbWluVmFsID0gbm9kZS5sZWZ0LmRhdGE7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW5WYWw7XG4gICAgfVxuXG4gICAgZmluZCh2YWx1ZSl7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5yb290O1xuXG4gICAgICAgIHdoaWxlKGN1cnJlbnQpe1xuICAgICAgICAgICAgaWYodmFsdWUgPCBjdXJyZW50LmRhdGEpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmxlZnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gY3VycmVudC5kYXRhKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5yaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGRhdGEgPT09IHZhbHVlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7IC8vIHJldHVybiB0aGUgbm9kZSBpdHNlbGZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbn07XG5cbi8vIGRlbGV0ZUl0ZW0odmFsdWUpIHtcbi8vICAgICB0aGlzLnJvb3QgPSB0aGlzLmRlbGV0ZVJlYyh0aGlzLnJvb3QsIHZhbHVlKTtcbi8vIH1cblxuLy8gZGVsZXRlUmVjKHJvb3QsIHZhbHVlKSB7XG4vLyAgICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbi8vICAgICAgICAgcmV0dXJuIHJvb3Q7XG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4vLyAgICAgICAgIHJvb3QubGVmdCA9IHRoaXMuZGVsZXRlUmVjKHJvb3QubGVmdCwgdmFsdWUpO1xuLy8gICAgIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbi8vICAgICAgICAgcm9vdC5yaWdodCA9IHRoaXMuZGVsZXRlUmVjKHJvb3QucmlnaHQsIHZhbHVlKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAvLyBOb2RlIHRvIGJlIGRlbGV0ZWQgZm91bmRcbi8vICAgICAgICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJvb3QucmlnaHQ7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAocm9vdC5yaWdodCA9PT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHJvb3QubGVmdDtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIC8vIE5vZGUgd2l0aCB0d28gY2hpbGRyZW46IEdldCB0aGUgaW4tb3JkZXIgc3VjY2Vzc29yXG4vLyAgICAgICAgIHJvb3QuZGF0YSA9IHRoaXMubWluVmFsdWUocm9vdC5yaWdodCk7XG4vLyAgICAgICAgIHJvb3QucmlnaHQgPSB0aGlzLmRlbGV0ZVJlYyhyb290LnJpZ2h0LCByb290LmRhdGEpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiByb290O1xuLy8gfSIsImltcG9ydCB7IE5vZGUsIFRyZWUsIHByZXR0eVByaW50IH0gZnJvbSBcIi4vYmluYXJ5U2VhcmNoVHJlZVwiO1xuXG5jb25zdCBhcnJheSA9IFsxMCwgNSwgMjAsIDMsIDcsIDE1LCAzMF07XG5jb25zdCB0cmVlID0gbmV3IFRyZWUoYXJyYXkpO1xuXG5jb25zb2xlLmxvZyh0cmVlLnJvb3QpO1xuXG5jb25zb2xlLmxvZyhwcmV0dHlQcmludCh0cmVlLnJvb3QpKTsiXSwibmFtZXMiOlsiTm9kZSIsImNvbnN0cnVjdG9yIiwiZGF0YSIsInRoaXMiLCJsZWZ0IiwicmlnaHQiLCJwcmV0dHlQcmludCIsIm5vZGUiLCJwcmVmaXgiLCJpc0xlZnQiLCJjb25zb2xlIiwibG9nIiwidHJlZSIsImFycmF5Iiwicm9vdCIsImJ1aWxkVHJlZSIsImxlbmd0aCIsIlNldCIsInNvcnQiLCJhIiwiYiIsImJ1aWxkVHJlZUhlbHBlciIsInN0YXJ0IiwiZW5kIiwibWlkIiwiTWF0aCIsImZsb29yIiwiaW5zZXJ0IiwidmFsdWUiLCJuZXdOb2RlIiwiY3VycmVudCIsInBhcmVudCIsImRlbGV0ZUl0ZW0iLCJtaW5WYWx1ZSIsIm1pblZhbCIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9