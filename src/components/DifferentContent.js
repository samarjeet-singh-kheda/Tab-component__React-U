function DifferentContent() {
  console.log("DIFFERENT CONTENT component rendered");

  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}

// console.log(
//   <DifferentContent test={23} key={12} ref="jojo">
//     {123} SON
//   </DifferentContent>
// );

// console.log(DifferentContent());

export default DifferentContent;
