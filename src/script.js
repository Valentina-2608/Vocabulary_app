/* Creating new word_block */

function createBlock(elem, elem_image, elem_caption, elem_text, elem_audio){

	let parent = document.querySelector('.list_words');	
	let new_block = document.createElement('div');
	new_block.classList.add('word_block');
	parent.appendChild(new_block);
	
	/* Add image */
    let block_image = document.createElement('img');
    block_image.classList.add('word_block_image');
    block_image.src = elem_image;
    new_block.appendChild(block_image);
	
	/* Add caption */
	let block_caption = document.createElement('div');
	block_caption.classList.add('word_block_caption');
    block_caption.innerHTML = elem_caption;
	new_block.appendChild(block_caption);

	/* Add text */
	let block_text = document.createElement('div');
	block_text.classList.add('word_block_text');
    block_text.innerHTML = elem_text;
	new_block.appendChild(block_text);


	/* Add audio */
	let block_audio = document.createElement('audio');
	block_audio.classList.add('word_block_audio');
    block_audio.src = elem_audio;
	block_audio.controls = 'controls';
	block_audio.type='audio/mpeg';
	new_block.appendChild(block_audio);

}	

	for(let word of words){
	 	createBlock(word, word.image, word.caption, word.text, word.audio)
}
	
	