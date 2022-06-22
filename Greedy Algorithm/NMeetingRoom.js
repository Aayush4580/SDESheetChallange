var N = 6,
  start = [1, 3, 0, 5, 8, 5],
  end = [2, 4, 5, 7, 9, 9];
var meetingRooms = (start, end) => {
  //we need to sort the schedule based on the end
  //because the quicker the meeting ends we can
  //allocate more number of meetings
  //so if the end is not sorted then do sort the end
  //and based on that the start
  //   for(var i=0;i<end.length;i++){
  //     for(var j=i+1;j<end.length;j++){
  //       if(end[i]>end[j]){
  //         [end[i],end[j]]=[end[j],end[i]];
  //         [start[i],start[j]]=[start[j],start[i]]
  //       }
  //     }
  //   }
  var res = [1];
  for (var i = 1; i < end.length; i++) {
    var e1 = end[i - 1];
    var s2 = start[i];
    if (e1 <= s2) {
      res.push(i + 1);
    }
  }
  return res;
};
console.log(meetingRooms(start, end));
