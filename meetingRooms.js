// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */

 function Interval(start, end) {
      this.start = start;
      this.end = end;
 }

var canAttendMeetings = function(intervals) {
	intervals.sort((a, b) => { if (a.start!=b.start) 
			return a.start-b.start;
		else 
			return a.end-b.end;
	});
	//console.log(intervals);
	var found = false;
	var first = intervals.shift();
	
    for (var i in intervals) {	
    	var obj = intervals[i];
    	if (first.end > obj.start){
    		found = true;
    		break;	
    	}
    	first = obj;
    }

    return !found;
};

var input = [];
input.push(new Interval(0,30));
input.push(new Interval(30,40));
input.push(new Interval(15,20));


console.log(canAttendMeetings(input));
