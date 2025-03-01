/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include "stdlib/stats/base/dists/cauchy/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/log1p.h"
#include "stdlib/math/base/special/ln.h"
#include "stdlib/math/base/special/pow.h"
#include "stdlib/constants/float64/ln_pi.h"

/**
* Evaluates the natural logarithm of the probability density function (logPDF) for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a value `x`.
*
* @param x         input value
* @param x0    	   location parameter
* @param gamma     scale parameter
* @return          evaluated logPDF
*
* @example
* double y = stdlib_base_dists_cauchy_logpdf( 2.0, 1.0, 1.0 );
* // returns ~-1.838
*/
double stdlib_base_dists_cauchy_logpdf( const double x, const double x0, const double gamma ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( gamma ) ||
		stdlib_base_is_nan( x0 ) ||
		gamma <= 0.0
	) {
		return 0.0/0.0; // NaN
	}
	return -( STDLIB_CONSTANT_FLOAT64_LN_PI + stdlib_base_ln( gamma ) + stdlib_base_log1p( stdlib_base_pow( (x-x0)/gamma, 2.0 ) ) );
}
