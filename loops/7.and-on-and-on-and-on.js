/**The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration. 

for (let i = 0; ; i += 1) {//there isn't a stopping condition
  console.log('and on');
}
*/
for (let i = 1; i <= 3; i += 1) {
  console.log('and on');
}

/**LS
 * The above code never terminates, because the condition of the for loop was left empty. In this case, JavaScript treats it as true.

One way to terminate the loop from within the body is to use the break statement: */
for (let i = 0; ; i += 1) {
  console.log('and on again');
  break;
}

/*Discussion
Note that continue does not help here, as it would simply forward us to the next iteration.
*/
