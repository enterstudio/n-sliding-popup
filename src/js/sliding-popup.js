class SlidingPopup {

	constructor (el) {
		if (!el) {
			el = document.querySelector('[data-o-component="o-sliding-popup"]');
		} else if (typeof el === 'string') {
			el = document.querySelector(el);
		}
		this.el = el;
		el.classList.add('o-sliding-popup--active');
		const close = el.querySelector('[data-o-component="o-sliding-popup-close"]');
		if (close) {
			close.addEventListener('click', () => this.close());
		}
	}

	open () {
		this.el.setAttribute('data-o-sliding-popup-visible', 'true');
	}

	close () {
		this.el.removeAttribute('data-o-sliding-popup-visible');
		const event = new CustomEvent('close', { detail: { target: this.el, instance: this }});
		if (this.el.onClose) {
			this.el.onClose.call(null, event);
		}
		if (this.onClose) {
			this.onClose.call(null, event);
		}
		this.el.dispatchEvent(event);
	}

	static init (el) {
		return new SlidingPopup(el);
	}
}

export default SlidingPopup;
