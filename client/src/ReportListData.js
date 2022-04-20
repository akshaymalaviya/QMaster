import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CanvasJSReact from './assets/canvasjs.react';

export default function ReportListData() {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const location = useLocation();
  const [first, setfirst] = useState(location.state.quizData);
  const [list, setlist] = useState([]);
  const [option, setoption] = useState();
  const callStudentData = async () => {
    try {
      const response = await fetch('/api/auth/studentlist', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      const tempdata = data.filter(
        (e, i) => e.quizID === location.state.quizID
      );
      // const unique = [...new Set(tempdata[0].list.map(item => item.userID))];
      setlist(tempdata.length === 0 ? [] : tempdata[0].list);
      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callStudentData();
  }, []);
  useEffect(() => {
    filterizeData();
  }, [list]);

  const filterizeData = () => {
    // list.filter((e,i)=>(e.quizID===location.state.quizID))
    var y = [],
      xy = [],
      x = [];
    let i = 0;

    first.map((e, i) => {
      e.suggestion.map((e1, i1) => {
        x.push(e1);
      });
    });
    x = [...new Set(x)];
    while (++i <= x.length) y.push(0);

    list.map((e, i) => {
      e.answer.map((e1, i1) => {
        if (e1 === first[i1].answer) {
          y[i1] = y[i1] + 1;
        }
      });
    });
    y.map((e, i) => {
      xy = [...xy, { label: x[i], y: y[i] }];
    });
    console.log(xy);

    setoption({
      title: {
        text: 'Performance with respect to topic of all over attended candidate',
      },
      data: [
        {
          type: 'column',
          dataPoints: xy,
        },
      ],
    });
  };
  return (
    <>
      {list?.length ? (
        <>
          <div>Attanded student number : {list?.length}</div>
          <div style={{ width: '60%', height: '60%' }}>
            {console.log(option)}
            {option ? (
              <CanvasJSChart
                options={option}
                /* onRef = {ref => this.chart = ref} */
              />
            ) : null}
          </div>
        </>
      ) : (
        <h2>NO student hase attanded quiz</h2>
      )}
    </>
  );
}
