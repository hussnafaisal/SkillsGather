'use client';

import { Component } from 'react';
import { AlertIcon } from './Icons';

/**
 * Catches any rendering error inside the form area so the rest of the page keeps working.
 * (Error boundaries must be class components.)
 */
export default class FormErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Frontend-only project: log to the console so it shows up in dev tools.
    console.error('[SkillsGather] Join form failed to render:', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="notice notice--error" role="alert">
        <AlertIcon size={26} />
        <div>
          <h2 className="h4">Something went wrong loading this section</h2>
          <p>Please try again. Your other pages are not affected.</p>
          <button type="button" className="btn btn--ghost" onClick={() => this.setState({ hasError: false })}>
            <span>Try again</span>
          </button>
        </div>
      </div>
    );
  }
}
