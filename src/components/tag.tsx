export const Tag = (props:  { tag?: String }) => {
	var tagColor;
	switch(props.tag) {
		case 'project':
			tagColor = "bg-green-300 text-green-700"
			break;
		case 'reading':
			tagColor = "bg-emerald-500 text-emerald-900"
			break;
		case 'note':
			tagColor = "bg-teal-400 text-green-800"
			break;
		default:
			tagColor = "bg-green-300 text-green-700"
	}

	return (
		<main className="inline">
			<div className={`inline p-1 rounded uppercase drop-shadow-md text-sm ${tagColor}`}>
				{props.tag}
			</div>
		</main>
	);
};