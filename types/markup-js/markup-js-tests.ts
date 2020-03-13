const template = "A string with {{some.kind.of.parameter}} in it.";
let markedup: string;
const context = {
	parm1: "Rod",
	parm2: 2,
	parm3: "Jane"
}
const options = {}

markedup = Mark.up(template, context);
markedup = Mark.up(template, context, options);
