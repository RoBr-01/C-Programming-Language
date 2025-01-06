// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="Preface.html">Preface</a></li><li class="chapter-item expanded affix "><a href="Preface1.html">Preface to the first edition</a></li><li class="chapter-item expanded "><a href="Chapter1/1-0.html"><strong aria-hidden="true">1.</strong> Chapter 1 - A Tutorial Introduction</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Chapter1/1-1.html"><strong aria-hidden="true">1.1.</strong> Getting Started</a></li><li class="chapter-item expanded "><a href="Chapter1/1-2.html"><strong aria-hidden="true">1.2.</strong> Variables and Arithmetic Expressions</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.3.</strong> The "For" Statement</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.4.</strong> Symbolic Constants</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.5.</strong> Character Input and Output</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">1.5.1.</strong> File Copying</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.5.2.</strong> Character Counting</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.5.3.</strong> Line Counting</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.5.4.</strong> Word Counting</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.6.</strong> Arrays</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.7.</strong> Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.8.</strong> Arguments - Call by Value</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.9.</strong> Character Arrays</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">1.10.</strong> External Variables and Scope</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Chapter 2 - Types, Operators and Expressions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> Variable Names</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> Data Types and Sizes</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> Constants</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> Declarations</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.5.</strong> Arithmetic Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.6.</strong> Relational and Logical Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.7.</strong> Type Conversions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.8.</strong> Increment and Decrement Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.9.</strong> Bitwise Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.10.</strong> Assignment Operators and Expressions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.11.</strong> Conditional Expressions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.12.</strong> Precedence and Order of Evaluation</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> Chapter 3 - Control Flow</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> Statements and Blocks</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> If-Else</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> Else-If</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> Switch</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> Loops - While and For</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> Loops - Do-While</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> Break and Continue</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.8.</strong> Goto and Labels</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> Chapter 4 - Functions and Program Structure</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> Basics of Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> Functions Returning Non-Integers</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> External Variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> Scope Rules</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> Header Files</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> Static Variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.7.</strong> Register Variables</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.8.</strong> Block Structure</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.9.</strong> Initialization</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.10.</strong> Recursion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.11.</strong> The C Preprocessor</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.12.</strong> File Inclusion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.13.</strong> Macro Substitution</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.14.</strong> Conditional Inclusion</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> Chapter 5 - Pointers and Arrays</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> Pointers and Addresses</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> Pointers and Function Arguments</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> Pointers and Arrays</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> Address Arithmetic</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.5.</strong> Character Pointers and Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> Pointer Arrays; Pointers to Pointers</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.7.</strong> Multi-dimensional Arrays</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> Initialization of Pointer Arrays</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.9.</strong> Pointers vs. Multi-dimensional Arrays</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.10.</strong> Command-line Arguments</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.11.</strong> Pointers to Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.12.</strong> Complicated Declarations</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> Chapter 6 - Structures</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> Basics of Structures</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> Structures and Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> Arrays of Structures</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> Pointers to Structures</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> Self-referential Structures</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.6.</strong> Table Lookup</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.7.</strong> Typedef</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.8.</strong> Unions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.9.</strong> Bit-fields</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> Chapter 7 - Input and Output</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> Standard Input and Output</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.2.</strong> Formatted Output - printf</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.3.</strong> Variable-length Argument Lists</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.4.</strong> Formatted Input - Scanf</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.5.</strong> File Access</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.6.</strong> Error Handling - Stderr and Exit</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.7.</strong> Line Input and Output</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.</strong> Miscellaneous Functions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.1.</strong> String Operations</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.2.</strong> Character Class Testing and Conversion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.3.</strong> Ungetc</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.4.</strong> Command Execution</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.5.</strong> Storage Management</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.6.</strong> Mathematical Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.7.</strong> Random Number Generation</div></li></ol></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> Chapter 8 - The UNIX System Interface</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">8.1.</strong> File Descriptors</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.2.</strong> Low Level I/O - Read and Write</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.3.</strong> Open, Creat, Close, Unlink</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.4.</strong> Random Access - Lseek</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.5.</strong> Example - An implementation of Fopen and Getc</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.6.</strong> Example - Listing Directories</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.7.</strong> Example - A Storage Allocator</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> Appendix A - Reference Manual</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> Introduction</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> Lexical Conventions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.1.</strong> Tokens</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.2.</strong> Comments</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.3.</strong> Identifiers</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.4.</strong> Keywords</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.5.</strong> Constants</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.6.</strong> String Literals</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.3.</strong> Syntax Notation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.</strong> Meaning of Identifiers</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.1.</strong> Storage Class</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.2.</strong> Basic Types</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.3.</strong> Derived Types</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.4.</strong> Type Qualifiers</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.5.</strong> Objects and Lvalues</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.</strong> Conversions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.1.</strong> Integral Promotion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.2.</strong> Integral Conversions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.3.</strong> Integer and Floating</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.4.</strong> Floating Types</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.5.</strong> Arithmetic Conversions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.6.</strong> Pointers and Integers</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.7.</strong> Void</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.8.</strong> Pointers to Void</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.</strong> Expressions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.1.</strong> Pointer Conversion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.2.</strong> Primary Expressions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.3.</strong> Postfix Expressions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.4.</strong> Unary Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.5.</strong> Casts</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.6.</strong> Multiplicative Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.7.</strong> Additive Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.8.</strong> Shift Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.9.</strong> Relational Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.10.</strong> Equality Operators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.11.</strong> Bitwise AND Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.12.</strong> Bitwise Exclusive OR Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.13.</strong> Bitwise Inclusive OR Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.14.</strong> Logical AND Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.15.</strong> Logical OR Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.16.</strong> Conditional Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.17.</strong> Assignment Expressions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.18.</strong> Comma Operator</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.19.</strong> Constant Expressions</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.</strong> Declarations</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.1.</strong> Storage Class Specifiers</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.2.</strong> Type Specifiers</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.3.</strong> Structure and Union Declarations</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.4.</strong> Enumerations</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.5.</strong> Declarators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.6.</strong> Meaning of Declarators</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.7.</strong> Initialization</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.8.</strong> Type Names</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.9.</strong> Typedef</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.10.</strong> Type Equivalence</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.</strong> Statements</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.1.</strong> Labeled Statements</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.2.</strong> Expression Statement</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.3.</strong> Compound Statement</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.4.</strong> Selection Statements</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.5.</strong> Iteration Statements</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.9.6.</strong> Jump Statements</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.10.</strong> External Declarations</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.10.1.</strong> Function Definitions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.10.2.</strong> External Declarations</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.11.</strong> Scope and Linkage</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.11.1.</strong> Lexical Scope</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.11.2.</strong> Linkage</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.</strong> Preprocessing</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.1.</strong> Trigraph Sequences</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.2.</strong> Line Splicing</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.3.</strong> Macro Definition and Expansion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.4.</strong> File Inclusion</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.5.</strong> Conditional Compilation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.6.</strong> Line Control</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.7.</strong> Error Generation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.8.</strong> Pragmas</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.9.</strong> Null Directive</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.12.10.</strong> Predefined Names</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.13.</strong> Grammar</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> Appendix B - Standard Library</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.</strong> Input and Output: &lt;stdio.h&gt;</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.1.</strong> File Operations</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.2.</strong> Formatted Output</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.3.</strong> Formatted Input</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.4.</strong> Character Input and Output Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.5.</strong> Direct Input and Output Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.6.</strong> File Positioning Functions</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.7.</strong> Error Functions</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.2.</strong> Character Class Tests: &lt;ctype.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.3.</strong> String Functions: &lt;string.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.4.</strong> Mathematical Functions: &lt;math.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.5.</strong> Utility Functions: &lt;stdlib.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.6.</strong> Diagnostics: &lt;assert.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.7.</strong> Variable Argument Lists: &lt;stdarg.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.8.</strong> Non-local Jumps: &lt;setjmp.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.9.</strong> Signals: &lt;signal.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.10.</strong> Date and Time Functions: &lt;time.h&gt;</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.11.</strong> Implementation-defined Limits: &lt;limits.h&gt; and &lt;float.h&gt;</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> Appendix C - Summary of Changes</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> Solutions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">12.1.</strong> Chapter 1</div></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
